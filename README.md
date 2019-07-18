[![Join the chat at https://gitter.im/imed-template/community][community-image]][community-url]
[![NPM Version][npm-image]][npm-url]
[![NPM][license-image]](LICENSE)

[![Build Status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/jguillod/imed-template/badge.svg?branch=master)](https://coveralls.io/github/jguillod/imed-template?branch=master)

[![Backers](https://opencollective.com/imed-template/backers/badge.svg)](#BACKERS)
[![Sponsors](https://opencollective.com/imed-template/sponsors/badge.svg)](#SPONSORS)

[community-image]: https://badges.gitter.im/imed-template/community.svg
[community-url]: https://gitter.im/imed-template?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-image]: https://img.shields.io/npm/v/@imed.ch/imed-template.svg
[npm-url]: https://npmjs.org/package/@imed.ch/imed-template
[license-image]: https://img.shields.io/github/license/jguillod/imed-template.svg
[travis-image]: https://travis-ci.com/jguillod/imed-template.svg?branch=master
[travis-url]: https://travis-ci.com/jguillod/imed-template
[coveralls-image]: https://img.shields.io/coveralls/live-js/imed-template/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/imed-template?branch=master


# imed-template #


> some template for nodejs module

Follow these steps&nbsp;:

1. Clone this repository with&nbsp;:

		git clone https://github.com/jguillod/imed-template.git

	to select revision without *coverage* stuff&nbsp;:

		git checkout 066fb91af2bbc0491d7012a4f6abc8e926851b1c

2. Change to your own remote git repository&nbsp;:

		git remote remove origin                                           
		git remote add origin https://github.com/<username>/<module-name>.git

3. Find/Replace "**imed-template**" with your own npm **"*module-name*"**, e.g. in `index.js`, `jsdoc.json`, `package.json` and `README.md`.

4. Find/Replace **"@imed.ch"** with your own npm **"*scope*"**, e.g. in `jsdoc.json`, `package.json` and `README.md`.

5. Find/Replace **"jguillod"** with your own git **"*username*"**, e.g. in `package.json` and `README.md`.

6. 

## Install ##

	npm i -S imed-template

## Usage ##

TODO

## Tests ##

	npm test

## Documentation ##

	npm run docs

will generate the documentation and open its `index.html` file. It's a shortcut of:

	npm run generate-docs
	npm run show-docs

If the index.html file does not show in your browser, edit `package.json` file and see if version number should be updated in `scripts["show-docs"]`, or open file in `./docs/imed-template/<version>/index.html` (e.g. `./docs/imed-template/0.1.0/index.html`).

## Release History ##

* 0.1.0 base template
  --Wed Jul 17 19:33:38 CEST 2019


## BACKERS ##

Find **imed-template** helpful? Become a [backer](https://opencollective.com/jguillod#support) and support **imed-template** with a monthly donation.

## SPONSORS ##

Use **imed-template** at Work? Ask your manager or marketing team if they'd help [support](https://opencollective.com/jguillod#support) our project. Your company's logo will also be displayed on [npmjs.com](http://npmjs.com/package/@imed.ch/imed-template) and our [GitHub repository](https://github.com/jguillod/imed-template#sponsors).



