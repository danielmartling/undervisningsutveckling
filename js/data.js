export async function getData() {
    const data = await getJSON("https://gist.githubusercontent.com/danielmartling/bf06ffe8141f34dd25461544852b4042/raw/6072062e91f9a6e57aec53175ee1cc14b7953899/dictionary.json")
    return data;
}

export async function getTemplates() {
    const data = await getJSON("https://gist.githubusercontent.com/danielmartling/e8fc83629dfca5a0fa4c2df9f418e232/raw/fc89e63766f3f98be5d9b3281f6bf669ca030485/templates.json")
    return data.templates;
}

async function getJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Could not load JSON data");
    }

    const data = await response.json();
    return data;
}