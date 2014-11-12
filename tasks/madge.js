/*
 * grunt-madge
 * https://github.com/pahen/grunt-madge
 *
 * Copyright (c) 2013 Patrik Henningsson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
	var madge = require('madge');

	grunt.registerMultiTask('madge', 'Check for circular dependencies in modules.', function () {
		var options = this.options({
				format: 'cjs',
				exclude: '',
				force: false,
				breakOnError: true
			}),
			files = this.filesSrc,
			result, circular;

		grunt.log.write('Checking ' + files.join(', ') + '...');

		// run madge on the given files/dirs
		result = madge(files, options);

		circular = result.circular().getArray();

		// check if madge found any circular dependencies
		if (circular.length) {
			grunt.log.error();

			// show a list of circular dependencies
			circular.forEach(function (path) {
				path.forEach(function (module, idx) {
					if (idx) {
						grunt.log.write(' -> '.cyan);
					}
					grunt.log.write(module.red);
				});
				grunt.log.writeln('');
			});

			grunt.log.warn('Circular dependencies found.');

			// fail task except if force was set
			return options.force;

		} else {
			// print a success message
			grunt.log.ok();

			return true;
		}
	});
};