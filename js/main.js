import { getData, getTemplates } from "./data.js";
import { randomize, setUpClearButton, setUpCopyButton } from "./generate.js";

const generateButton = document.getElementById("generateButton");
const output = document.getElementById("output");

const historyDiv = document.getElementById("history");

let data;
let templates;
let dataLoaded = false;

let history = [];

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
    if (history.length >= 11) {
        history.shift();
    }
    history.push(str);
    renderHistory();
}

function renderHistory() {
    let historyHTML = "";

    if (history.length > 0) {
        history
            .slice(0, history.length - 1)
            .reverse()
            .forEach((sentence) => {
                historyHTML += `
                    <li class="sentence">${sentence}</li>
                `;
            })
    }

    if (history.length > 1) {
        historyDiv.innerHTML = historyHTML;
    }
}

init();