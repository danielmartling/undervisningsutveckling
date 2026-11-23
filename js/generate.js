function randomize(list, capitalize = false) {
    const word = list[Math.floor(Math.random() * list.length)];
    return capitalize ? capitalizeFirstLetter(word) : word;
}

function capitalizeFirstLetter(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}


function generate() {
    const template = randomize(templates);

    const sentence = template()
        .replace(/\s+/g, " ")
        .trim();

    document.getElementById("result").value = sentence;
    return sentence;
}

function clipboard() {
    navigator.clipboard.writeText(document.getElementById("result").value)
}