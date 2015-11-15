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
				remoteReleases: 'http://appdatable.local:8081/updates?version=<%= pkg.version %>',
				loadingGif: './assets/giphy.gif',
				iconUrl: 'http://www.iconarchive.com/download/i3025/arrioch/halloween/rorschach.ico',
				setupIcon: './assets/Arrioch-Halloween-Rorschach.ico',
			}
		},
	});

	grunt.loadNpmTasks('grunt-electron-installer')

	grunt.registerTask('default', ['create-windows-installer']);
};
