import { getData, getTemplates } from "./data.js";
import { randomize, setUpClearButton, setUpCopyButton } from "./generate.js";

const generateButton = document.getElementById("generateButton");
const output = document.getElementById("output");

let data;
let templates;
let dataLoaded = false;

async function init() {
    try {
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
        } catch (error) {
            console.error(error.message);
        }
    });
}

init();