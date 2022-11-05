/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000/api'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Group16-Software-Testing'
}