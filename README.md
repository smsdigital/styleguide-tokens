# Styleguide Variables

This is an official repository by the CoE-WebDev.

Add this package to your project and use all the provided values for your UI.

The values in this repository/package will be continously updated in accordance to the official SMS digital styleguide.

Make sure you stay up to date with new releases/patches.

## Usage:
---
### Install package:
```
npm install styleguide-variables --registry https://npm.fury.io/smsdigitalgmbh --save
```
After the installation has finished, you should see those lines in the terminal (length-value may vary but it should always be way bigger than 0):

```
    // SMS digital: Styleguide-Variables \\
[+] CSS generated (length: 9758): ./styles/variables.css
[+] SCSS generated (length: 11098): ./styles/variables.scss
```

You can verify that everything worked correctly by comparing your `node_modules` folder-structure with this:
```
node_modules/
-- convert
---- css.js
---- scss.js
-- data
---- styles.json
--styles
---- variables.css ==> That's the important part
---- variables.scss ==> That's the important part
-- build.js
-- package.json
-- README.md
```

### Importing
To import all variables to your project you can use this syntax:
##### `SCSS` (We might find a better way of importing than from node_modules in the future)
```
@import 'node_modules/styleguide-variables/styles/variables.scss';
```
In case you want/need to work with the values directly in your code, you can import/read the `data/styles.json`.

----
## Changelog
## [0.1.2] - 2021-02-17
- Added changelog to this README.md
- Added *.tgz files to gitignore
## [0.1.1] - 2021-02-16
- First package release to gemfury
----

## If you have questions about this repository or want to contribute, please feel free to contact the CoE-WebDev.
