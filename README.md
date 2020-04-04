[![Join the chat at https://gitter.im/imed-template/community](https://badges.gitter.im/imed-template/community.svg)](https://gitter.im/imed-template?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM Version](https://img.shields.io/npm/v/@imed.ch/imed-template.svg)](https://npmjs.org/package/@imed.ch/imed-template)
[![Dependency Status](https://david-dm.org/jguillod/imed-template.svg?style=flat)](https://david-dm.org/jguillod/imed-template)
[![devDependency Status](https://img.shields.io/david/dev/jguillod/imed-template.svg?style=flat)](https://david-dm.org/jguillod/imed-template#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/github/jguillod/imed-template/badge.svg?branch=master)](https://coveralls.io/github/jguillod/imed-template?branch=master)
[![NPM](https://img.shields.io/github/license/jguillod/imed-template.svg)](LICENSE)

[![Backers](https://opencollective.com/imed-template/backers/badge.svg)](#BACKERS)
[![Sponsors](https://opencollective.com/imed-template/sponsors/badge.svg)](#SPONSORS)

> [![Build Status](https://travis-ci.com/jguillod/imed-template.svg?branch=master)](https://travis-ci.com/jguillod/imed-template)   <=> Having **Build failing** is expected and a feature of this template !

# imed-template #


> some template for nodejs module

---
**WARNING !! THIS MODULE IS A NODEJS MODULE TEMPLATE AND IS NOT INTENDED TO BE INSTALLED !!**
---

## PLEASE ! Follow these steps&nbsp;: ##

1. Make a workable copy of this template by either:

	- Click on "**Use this Template**" button on the [main page repository](https://github.com/jguillod/imed-template) and create a new repository from imed-template (choose carefully your own *module-name*).

			git clone https://github.com/<username>/<module-name>.git

	- or clone it then set remote to your own repository:

			git clone https://github.com/jguillod/imed-template
			git remote set-url origin <your_url>

> **Now edit the project with your favorite editor and do&nbsp;:&nbsp;...**

2. Find/Replace "**imed-template**" with your own npm **"*module-name*"**, e.g. in&nbsp;:

	- `index.js`
	- `jsdoc.json`
	- `package.json`
	- `README.md`

3. Find/Replace **"@imed.ch"** with your own npm **"*@scope*"**, if you dont have a scope, replace **"@imed.ch/"** (suffixed with slash) with **""**, e.g. in&nbsp;:

	- `jsdoc.json`
	- `package.json`
	- `README.md`

4. Find/Replace **"jguillod"** with your own git **"*username*"**, e.g. in&nbsp;:

	- `package.json`
	- `README.md`

5. The following modules should be installed globally (my personal preference not to duplicate on disk for each new module) or locally:

		npm i -g chai coveralls jsdoc minami mocha nyc
	
	Also, edit file `jsdoc.json` to set `template` property to the correct path:

	- when global install on OSX (tips: exec in shell `echo $NODE_PATH` to find global `node_module` path):

			"template": "/usr/local/lib/node_modules/minami"

	- or locally:

			"template": "./node_modules/minami",
		

6. Now code your module&nbsp;:

	- **ALWAYS** install dev dependencies with
	
			npm i

	- Optionally install your required modules with

			npm i -S <some-module> ...

	- Edit `README.md` with your module specs and delete this section "*Follow these steps*".
		- Also, delete **BACKERS** and **SPONSORS** *badges* and *sections* when appropriate or configure your [opencollective account](https://opencollective.com/jguillod).
		- Either create a [**GITTER**](https://gitter.im) room for this module to chat with your module followers or delete the gitter *badge*.

	- Edit `index.js` and any `src/` or `lib/` javascript files (i.e. code your module).
	- Write [JSDoc](https://jsdoc.app) comments to document your code.
	- Edit `test/` files (i.e. write [Mocha](https://mochajs.org) tests with [chai](https://www.chaijs.com/) - [expect()](https://www.chaijs.com/guide/styles/#expect), [assert()](https://www.chaijs.com/guide/styles/#assert) and [should](https://www.chaijs.com/guide/styles/#should)-style assertions).

7. Test your module&nbsp;:

			npm test
	
	It should fail because I wrote a failing test in order to prevent committing until it is fixed. This is a normal feature of git pre-commit hook (see [module pre-commit](https://github.com/observing/pre-commit) for details). I'm willing to ensure a commit is not done too early. Anyway if you prefer to force the commit by passing the pre-commit hook use the `--no-verify` args in command below:

		git commit --no-verify -m "..."

8. Commit and push to your git repository.
	- Commit, push and publish your module&nbsp;:

			git status
			git add package.json index.js src/ test/ etc.

		then, either (A) or (B)&nbsp;:

		(A) Safe way&nbsp;:

			git commit -m "module first update"
			## or to bypass the pre-commit hook :
			# git commit --no-verify -m "..."

			npm version patch -m "Patched to %s with corrections"
			git push origin master --tags
			npm publish --access public

		(B) Fast way using using `--force` I sure hope you know what you are doing&nbsp;:

			npm version patch --force -m "Patched to %s with corrections"
			git push origin master --tags
			npm publish --access public
			
9. Build and coverage badges&nbsp;:

	- Click on the *build* badge or [open the link](https://travis-ci.com/jguillod/imed-template) and configure [Travis CI](https://travis-ci.com). Or, delete the *build* and *coverage* badges in README.md when appropriate.

	> Coverage is run automaticaly by Travis. You can also change the behavior by editing file `.travis.yml`.

10. If you find this template helpfull, please consider to buy me some cups of coffee on&nbsp;:

	[![click me](https://ko-fi.com/img/Kofi_Logo_Blue.svg)](https://ko-fi.com/elojes)

---
**TEMPLATE END HERE => REMOVE PART FROM START TO HERE, THEN EDIT YOU OWN DOCUMENTATION WITH/OUT THE DOCUMENTATION BELOW.**

---

## Install ##

	npm i -S @imed.ch/imed-template

## Usage ##

TODO

## Tests ##

	npm test

## Documentation ##

	npm run docs

will generate the documentation and open its `index.html` file. It's a shortcut of:

	npm run generate-docs
	npm run show-docs

Last command should open file `./docs/node-ifconfig.me/<version>/index.html` (e.g. `./docs/node-ifconfig.me/0.1.0/index.html`) in your browser.

## Release History ##

* 0.2.6 added support for [pre-commit](https://github.com/observing/pre-commit).
* 0.2.5 cleaning
  -- Sun Jul 28 10:33:51 CEST 2019
* 0.1.0 base template
  -- Wed Jul 17 19:33:38 CEST 2019

## BACKERS ##

Find **imed-template** helpful? Become a [backer](https://opencollective.com/jguillod#support) and support **imed-template** with a monthly donation.

## SPONSORS ##

Use **imed-template** at Work? Ask your manager or marketing team if they'd help [support](https://opencollective.com/jguillod#support) our project. Your company's logo will also be displayed on [npmjs.com](http://npmjs.com/package/@imed.ch/imed-template) and our [GitHub repository](https://github.com/jguillod/imed-template#sponsors).

[![click me](https://ko-fi.com/img/Kofi_Logo_Blue.svg)](https://ko-fi.com/elojes)

## ABOUT US ##

Please, feel free to visit our personal website [imed.ch](http://imed.ch) and have a look to IoT projects for HealthCare we are involved in with [eliiot technology](http://eliiot-technology.ch).
