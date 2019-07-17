# imed-template #

> my template for nodejs module

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

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

## License ##

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/imed-template.svg
[npm-url]: https://npmjs.org/package/imed-template
[travis-image]: https://img.shields.io/travis/live-js/imed-template/master.svg
[travis-url]: https://travis-ci.org/live-js/imed-template
[coveralls-image]: https://img.shields.io/coveralls/live-js/imed-template/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/imed-template?branch=master