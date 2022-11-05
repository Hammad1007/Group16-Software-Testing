const {
  setHeadlessWhen,
  setWindowSize,
} = require('../../index'); // @codeceptjs/configure

setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1500, 800);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://github.com',
      show: false,
      browser: 'chrome',
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'integration',
  plugins: {
  }
}