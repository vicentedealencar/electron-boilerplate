module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'create-windows-installer': {
			ia32: {
				appDirectory: './dist/App-win32-ia32',
				outputDirectory: './dist/release',
				authors: 'My App Inc.',
				exe: '<%= pkg.productName %>.exe',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				//remoteReleases: ''
			}
		},
	});

	grunt.loadNpmTasks('grunt-electron-installer')

	grunt.registerTask('default', ['create-windows-installer']);
};
