# Styleguide Tokens

This is an official repository by the EO Software Development.

This package needs to be added to your sms digital project, so it will align with the official company styleguide.

The values in this repository/package will be continously updated in accordance to the official SMS digital styleguide, so make sure you stay up to date with new releases/patches.

---
## Install package:
```
npm install @smsdigital/styleguide-tokens
```

## Importing
To import all variables to your project you can use this syntax:
```js
// SCSS (consider using '@use' instead of '@import' though)
@import '@smsdigital/styleguide-tokens/tokens.scss';

// CSS
@import '@smsdigital/styleguide-tokens/tokens.css';

// LESS
@import '@smsdigital/styleguide-tokens/tokens.less';

// JSON (in case you need to work with the values directly in your code)
import tokens from '@smsdigital/styleguide-tokens/tokens.json';
```
### Angular
If you are using Angular (or a framework that follows a similar approach) it might make sense to not import the scss/css in some style-file, but instead to add it as an entry to your `angular.json` into the following property:

`projects/<project-name>/architect/build/options/styles`

----
## Changelog
### [0.2.0] - 2021-05-12
- Changed folder-structure
- Switched to library for converting tokens
- Switched to using flat structure in tokens instead of maps etc
- Switched to publishint to npmjs.com
### [0.1.2] - 2021-02-19
- Added changelog to this README.md
- Added *.tgz files to gitignore
### [0.1.1] - 2021-02-16
- First package release to gemfury
----

## If you have questions about this repository or want to contribute, please feel free to contact the EO Software Development.
