module.exports = function(config) {
  config.set({
    basePath : './',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/collection-resource.js',
      'tests/*.js'
    ],

    preprocessors: {
      'src/collection-resource.js': 'coverage'
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        // { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        // { type: 'text', subdir: '.', file: 'text.txt' },
        // { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-jasmine',
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
