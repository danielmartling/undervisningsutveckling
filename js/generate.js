export function randomize(list, capitalize = false) {
    const word = list[Math.floor(Math.random() * list.length)];
    return capitalize ? capitalizeFirstLetter(word) : word;
}

function capitalizeFirstLetter(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

const clearButton = document.getElementById("clearButton");
const copyButton = document.getElementById("copyButton");

export function setUpClearButton() {
    clearButton.addEventListener("click", async () => {
        try {
            output.value = "";
        } catch (error) {
            console.error(error.message);
        }
    });
}

export function setUpCopyButton() {
    copyButton.addEventListener("click", async () => {
        try {
            navigator.clipboard.writeText(document.getElementById("output").value);
        } catch (error) {
            console.error(error.message);
        }
    });
}