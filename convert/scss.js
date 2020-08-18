const { writeFileSync } = require("fs");
const { EOL } = require("os");
const TAB = '\t';

module.exports = function generate(data, directory) {
    const filePath = `${directory}/variables.scss`;

    let output = createComment();
    output += createGlobals(data);
    output += createThemes(data);

    writeFileSync(filePath, output);
    console.log(`-> SCSS generated (length: ${output.length}): ${filePath}`);
}

function createComment() {
    return `// This file was automatically generated on ${new Date().toLocaleString('en-US', { hour12: false })}${EOL}`
}

function createGlobals(data) {
    let globals = `${EOL}// Global variables${EOL}`;
    for (const key in data.global) {
        const value = data.global[key];
        globals += `$${key}: ${value};${EOL}`;
    }
    return globals;
}

function createThemes(data) {
    let themes = `${EOL}$themes: (${EOL}`;
    for (const theme in data.themes) {
        themes += `${TAB}"${theme}": (${EOL}`;
        for (const key in data.themes[theme]) {
            let value = data.themes[theme][key];
            themes += `${TAB}${TAB}"${key}": ${value},${EOL}`;
        }
        themes += `${TAB}),${EOL}`;
    }
    themes += `);${EOL}`;
    return themes;
}