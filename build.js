const { existsSync, mkdirSync, unlinkSync } = require("fs");

const data = require("./data/styles.json");
const genCss = require("./convert/css");
const genScss = require("./convert/scss");

const directory = './styles';

if (existsSync(directory)) {
    unlinkSync(directory);
}
mkdirSync(directory);

genCss(data, directory);
genScss(data, directory);