import { getData, getTemplates } from "./data.js";
import { randomize, setUpClearButton, setUpCopyButton } from "./generate.js";

const generateButton = document.getElementById("generateButton");
const output = document.getElementById("output");

const previousDiv = document.getElementById("previous");

let data;
let templates;
let dataLoaded = false;

let previous = [];

async function init() {
    try {
        output.value = "";

        data = await getData();
        templates = await getTemplates();
        dataLoaded = true;

        setUpGenerateButton();
        setUpClearButton();
        setUpCopyButton();

    } catch (error) {
        console.error(error);
    }
}

function setUpGenerateButton() {
    generateButton.addEventListener("click", async () => {
        try {
            if (!dataLoaded) {
                console.error("Error! Not loaded.")
                return;
            }

            const template = randomize(templates);

            let sentence = template.replace(/\{(\w+)\}/g, (match, key) => {
                return randomize(data[key]);
            });

            sentence =
                sentence.charAt(0).toLocaleUpperCase("sv-SE")
                + sentence.slice(1);

            output.value = sentence;

            enqueue(sentence);

        } catch (error) {
            console.error(error.message);
        }
    });
}

function enqueue(str) {
    if (previous.length >= 11) {
        previous.shift();
    }
    previous.push(str);
    renderPrevious();
    console.log(previous)
}

function renderPrevious() {
    let previousHTML = "";

    if (previous.length > 0) {
        previous
            .slice(0, previous.length - 1)
            .reverse()
            .forEach((sentence) => {
                previousHTML += `
                    <li class="sentence">${sentence}</li>
                `;
            })
    }

    if (previous.length > 1) {
        previousDiv.innerHTML = previousHTML;
    }
}

init();