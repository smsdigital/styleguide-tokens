const { writeFileSync } = require("fs");
const { EOL } = require("os");
const TAB = '\t';

module.exports = function generate(data, directory) {
    const filePath = `${directory}/variables.scss`;

    let output = createComment();
    output += createGlobals(data);
    output += createTypeSets(data);
    output += createThemes(data);

    writeFileSync(filePath, output);
    const status = output.length === 0 ? '\x1b[31m[-]\x1b[0m' : '\x1b[32m[+]\x1b[0m';
    console.log(`${status} SCSS generated (length: ${output.length}): ${filePath}`);
}

function createComment() {
    return `// This file was automatically generated on ${new Date().toLocaleString('en-US', { hour12: false })}${EOL}`
}

function createGlobals(data) {
    let output = '';
    output += processGlobalEntry('Colors', data.global.colors);
    output += processGlobalEntry('Spacings', data.global.spacing);
    output += processGlobalEntry('Layouts', data.global.layout);
    return output;
}

function createTypeSets(data) {
    let output = `${EOL}/* TypeSets */${EOL}`;
    for (const typeSet in data.typeSets) {
        output += `@mixin ${typeSet} {${EOL}`;
        for (const property in data.typeSets[typeSet]) {
            let value = data.typeSets[typeSet][property];
            output += `${TAB}${property}: ${value};${EOL}`;
        }
        output += `}${EOL}`;
    }
    return output;
    
}

function createThemes(data) {
    let output = `${EOL}/* Themes */`;
    output += `${EOL}$themes: (${EOL}`;
    for (const theme in data.themes) {
        output += `${TAB}"${theme}": (${EOL}`;
        for (const key in data.themes[theme]) {
            let value = data.themes[theme][key];
            output += `${TAB}${TAB}"${key}": ${value},${EOL}`;
        }
        output += `${TAB}),${EOL}`;
    }
    output += `);${EOL}`;
    return output;
}

function processGlobalEntry(name, entry) {
    let output = `${EOL}/* ${name} */${EOL}`;
    for (const key in entry) {
        const value = entry[key];
        output += `$${key}: ${value};${EOL}`;
    }
    return output;
}