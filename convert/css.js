const { writeFileSync } = require("fs");
const { EOL } = require("os");
const TAB = '\t';

module.exports = function generate(data, directory) {
    const filePath = `${directory}/variables.css`;

    let output = createComment();
    output += `:root {${EOL}`;
    output += createGlobals(data);
    output += createThemes(data);
    output += `}${EOL}`

    writeFileSync(filePath, output);
    console.log(`-> CSS generated (length: ${output.length}): ${filePath}`);
}

function createComment() {
    let comment = `/*${EOL}`;
    comment += `${TAB}This file was automatically generated on ${new Date().toLocaleString('en-US', { hour12: false })}${EOL}`;
    comment += `*/${EOL}${EOL}`;
    return comment;
}

function createGlobals(data) {
    let globals = `${TAB}/* Global variables */${EOL}`;
    for (const key in data.global) {
        const value = data.global[key];
        globals += `${TAB}--${key}: ${value};${EOL}`;
    }
    return globals;
}

function createThemes(data) {
    let themes = EOL;
    for (const theme in data.themes) {
        themes += `${TAB}/* Theme: ${theme} */${EOL}`;
        for (const key in data.themes[theme]) {
            let value = data.themes[theme][key];
            if (value.startsWith('$')) {
                value = data.global[value.substr(1)];
            }
            themes += `${TAB}--theme-${theme}-${key}: ${value};${EOL}`;
        }
        themes += EOL;
    }
    return themes;
}