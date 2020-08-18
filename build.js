const { existsSync, mkdirSync, rmdirSync } = require("fs");

const data = require("./data/styles.json");
const genCss = require("./convert/css");
const genScss = require("./convert/scss");

const directory = './styles';

if (existsSync(directory)) {
    rmdirSync(directory, { recursive: true });
}
mkdirSync(directory);

genCss(data, directory);
genScss(data, directory);