const { existsSync, mkdirSync, rmdirSync, writeFileSync } = require("fs");
const { EOL } = require("os");
const TAB = '\t';

const data = require("./data/styles.json");
const genCss = require("./convert/css");
const genScss = require("./convert/scss");

const directory = './styles';

if (existsSync(directory)) {
    rmdirSync(directory, { recursive: true });
}
mkdirSync(directory);

generateLogHeader();
genCss(data, directory);
genScss(data, directory);

function generateLogHeader() {
    const before = '\x1b[1m\x1b[31m/\x1b[34m/';
    const middleText = '\x1b[37m SMS digital: Styleguide-Variables ';
    const after = '\x1b[31m\\\x1b[34m\\';
    const reset = '\x1b[0m';
    console.log(`${TAB}${before}${middleText}${after}${reset}`);
}