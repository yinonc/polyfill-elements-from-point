const filesPattern = 'test/*.karma.js'

module.exports = function (config) {
    config.set({
        files: [
            filesPattern
        ],
        browsers: ['ChromeHeadless'],
        frameworks: ['jasmine'],
        preprocessors: {
            [filesPattern]: ['webpack']
        },
        webpack: {}
    })
}
