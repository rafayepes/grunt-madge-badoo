# grunt-madge

> Check for circular dependencies in AMD or CommonJS modules using Madge.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-madge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-madge');
```

## The "madge" task

### Overview
In your project's Gruntfile, add a section named `madge` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  madge: {
	options: {
	  format: 'amd'
	},
	all: ['js/modules']
  },
})
```

### Options

#### format
Type: `String`
Default value: `'cjs'`

Which format the modules being checked are using (cjs, amd).

#### exclude
Type: `String`
Default value: `''`

String from which a regex will be constructed for excluding files from the scan.

#### force
Type: `Boolean`
Default value: `false`

Set `force` to `true` to report errors but not fail the task.

#### breakOnError
Type: `Boolean`
Default value: `true`

Set `breakOnError` to `false` to not fail the task on parser errors and when modules are missing.