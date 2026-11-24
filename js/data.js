export async function getData() {
    const response = await fetch("../data/dictionary.json");

    if (!response.ok) {
        throw new Error("Could not load JSON data");
    }

    const data = await response.json();
    return data;
}

export async function getTemplates() {
    const response = await fetch("../data/templates.json");

    if (!response.ok) {
        throw new Error("Could not load JSON data");
    }

    const data = await response.json();
    return data.templates;
}