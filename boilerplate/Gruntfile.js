module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'create-windows-installer': {
			ia32: {
				appDirectory: '../dist/<%= pkg.productName %>-win32-ia32',
				outputDirectory: '../updates',
				authors: '<%= pkg.author.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				title: '<%= pkg.name %>',
				//remoteReleases: 'http://127.0.0.1:8081/updates?version=<%= pkg.version %>',
				loadingGif: './assets/giphy.gif',
				iconUrl: 'http://127.0.0.1:8081/boilerplate/assets/rorschach.ico',
				setupIcon: './assets/rorschach.ico',
			}
		},
	});

	grunt.loadNpmTasks('grunt-electron-installer')

	grunt.registerTask('default', ['create-windows-installer']);
};
