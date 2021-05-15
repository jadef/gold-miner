<p align="center"><img src="https://rawgithub.com/jadef/gold-miner/master/docs/images/logo-crest.svg" alt="Mining for Gold" /></p>

<h1 align="center">Gold Miner</h1>

<p align="center">A fun (and useful) pet project to keep track of personal notes on various web technologies.</p>

<p align="center"><a href="https://circleci.com/gh/jadef/gold-miner"><img src="https://img.shields.io/circleci/project/github/jadef/gold-miner.svg" alt="Circle CI" /></a> <a href="https://david-dm.org/jadef/gold-miner" title="dependencies status"><img src="https://david-dm.org/jadef/gold-miner/status.svg"/></a> <a href="https://david-dm.org/jadef/gold-miner?type=dev" title="devDependencies status"><img src="https://david-dm.org/jadef/gold-miner/dev-status.svg"/></a> <a href="https://github.com/jadef/gold-miner/releases/latest"><img src="https://img.shields.io/github/release/jadef/gold-miner/all.svg" alt="Dependency Status" /></a></p>

# Table of Contents

* [Setup](#setup)
  * [Install dependencies](#install-dependencies)
* [Development](#development)
  * [JavaScript](#javascript)
  * [Sass](#sass)
* [Structure](#structure)
* [Deployment](#deployment)
* [Roadmap](#roadmap)

----

## Setup

### Install dependencies

NPM works, but I've moved to Yarn for package dependencies. If you haven't already installed yarn on the machine (but do have homebrew): `brew install yarn`

Then it's as simple as: `yarn install` (package and lockfile already exist)

## Development

The absolute basic: `yarn start`

### JavaScript

This is a [React](https://facebook.github.io/react/) project, so obviously JS heavy. It has [babel](http://babeljs.io/), notably with `"presets": ["@babel/preset-env", "@babel/preset-react"]` and one plugin of `"@babel/plugin-proposal-class-properties"`.

The (dev) build itself is using [Webpack](https://webpack.js.org/). The local dev uses a combination of [Browsersync](https://www.browsersync.io/), webpack dev middleware and react-refresh. Since it runs in middleware there is no "compilation" to a public folder, it's created in memory. This also has a layer of "fast refresh" so that during dev the whole page doesn't need refreshing, saving a `.jsx` file will just reload affected components.

All of that said, it should **just work**, but the files to pay most attention to in relation, more or less in this order:

- `package.json`
- `webpack.config.js`
- `.babelrc`
- `serve.js`


#### JS Linting

[Eslint](http://eslint.org/) is integrated into the dev build (as well as being independently triggered.) The rules are part of the configuration file found at `.eslintrc.json`. However, it's notable just `"extends": ["eslint:recommended", "plugin:react/recommended"]`

If you want to use the linting independent of the build, `yarn run lint` clubs js and sass, or more specifically `yarn run lint:js` will do a single run.

### Sass

Sass is also compiled by webpack in the dev environment. Notably, the `.scss` files (note: don't mix `.sass` files in) are directly included in the corresponding JSX file. See the [Structure](#structure) section below for a visual representation of this relationship.

#### Sass Linting

Similar to JS linting, [Stylelint](https://stylelint.io/) is integrated into webpack, and runs every time the Sass is first compiled or modified. To see the rules (based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)) can be found at `stylelint.config.js`. 

If you want to use the linting independent of the build, `yarn run lint` clubs js and sass, or more specifically `yarn run lint:sass` will do a single run.

## Structure

![Mining for Gold](https://rawgithub.com/jadef/gold-miner/master/docs/images/component-structure.png)

### 1. Builders

Entry files for general building of application (and genaral sass files). Mostly shouldn't need to interact with this scope unless a large change happens.

### 2. Components

Where all the "features" live. This is where most of the work goes in that changes or additions to the application (or it's mirrored styles) should be broken down into this level.

### 3. Sections

Technically also components, these are isolated into more "mid-level" structural components responsible for sections of the application.

## Deployment

`TODO` Currently only dev environment. Will need Environment flags and a deploy process once production is definied and architected.

## Roadmap

![Roadmap](https://rawgithub.com/jadef/gold-miner/master/docs/images/roadmap.png)


<p align="center"><img src="https://rawgithub.com/jadef/gold-miner/master/docs/images/logo-sm.svg" alt="Mining for Gold" /></p>