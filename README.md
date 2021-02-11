# Styleguide Variables

This is an official repository by the CoE-WebDev.

Add this package to your app and use all the provided values for your application.

The values in this repository/package will be continously updated in accordance to the official SMS Digital styleguide.

If your project is already using this package, make sure you stay up to date to new releases/patches.

## Usage:
---
### Install package:
```
npm install <path> --save
```
After the installation has finished, you should see those lines in the terminal (length-value may vary but it should always be way over 0):

```
SMS Digital: Styleguide-Variables
[+] CSS generated (length: 9758): ./styles/variables.css
[+] SCSS generated (length: 11098): ./styles/variables.scss
```

You can check the first time, if everything went correct, by validating your folder-structure in your node_modules looks like this:
```
node_modules/
-- convert
---- css.js
---- scss.js
-- data
---- styles.json
--styles
---- variables.css ==> That's the most important part
---- variables.scss ==> That's the most important part
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
In case you want/need to work with the vaules directly in your code, you can import/read the `data/styles.json`.

----
## If you have questions about this repository or you want to contribute, please feel free to contact the CoE-WebDev.
