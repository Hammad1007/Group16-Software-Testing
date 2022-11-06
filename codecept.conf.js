/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Group16-Software-Testing'
}