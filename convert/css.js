const { writeFileSync } = require("fs");
const { EOL } = require("os");
const TAB = '\t';

module.exports = function generate(data, directory) {
    const filePath = `${directory}/variables.css`;

    let output = createComment();
    output += `:root {${EOL}`;
    output += createGlobals(data);
    output += EOL;
    output += createTypeSets(data);
    output += createThemes(data);
    output += `}${EOL}`

    writeFileSync(filePath, output);
    const status = output.length === 0 ? '\x1b[31m[-]\x1b[0m' : '\x1b[32m[+]\x1b[0m';
    console.log(`${status} CSS generated (length: ${output.length}): ${filePath}`);
}

function createComment() {
    let comment = `/*${EOL}`;
    comment += `${TAB}This file was automatically generated on ${new Date().toLocaleString('en-US', { hour12: false })}${EOL}`;
    comment += `*/${EOL}${EOL}`;
    return comment;
}

function createGlobals(data) {
    let globals = `${TAB}/* Global variables */${EOL}`;
    for (const section in data.global) {
        const capitalized = section.substr(0, 1).toUpperCase() + section.substr(1);
        globals += `${EOL}${TAB}/* ${capitalized} */${EOL}`;
        for (const entry in data.global[section]) {
            const value = data.global[section][entry];
            const key = `${section}-${entry}`;
            globals += `${TAB}--${key}: ${value};${EOL}`;
        }
    }
    return globals;
}

function createTypeSets(data) {
    let typeSets = `${TAB}/* Typesets variables */${EOL}`;
    for (const section in data.typeSets) {
        const capitalized = section.substr(0, 1).toUpperCase() + section.substr(1);
        typeSets += `${EOL}${TAB}/* ${capitalized} */${EOL}`;
        for (const entry in data.typeSets[section]) {
            const value = data.typeSets[section][entry];
            const key = `${section}-${entry}`;
            typeSets += `${TAB}--${key}: ${value};${EOL}`;
        }
    }
    return typeSets;
}

function createThemes(data) {
    let themes = EOL;
    for (const theme in data.themes) {
        themes += `${TAB}/* Theme: ${theme} */${EOL}`;
        for (const key in data.themes[theme]) {
            let value = data.themes[theme][key];
            if (value.startsWith('$')) {
                value = data.global.colors[value.substr(1)];
            }
            themes += `${TAB}--theme-${theme}-${key}: ${value};${EOL}`;
        }
    }
    return themes;
}