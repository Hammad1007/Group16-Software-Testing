const { config } = require('../codeceptjs');
const merge = require('../deepMerge');

module.exports = function(width, height) {
  config.addHook(cfg => {
    if (!cfg.helpers) return;
    if (cfg.helpers.Puppeteer) {
      const args = ['--no-sandbox', `--window-size=${width},${height}`];
      cfg.helpers.Puppeteer.windowSize = `${width}x${height}`;

      // prepare window for a browser
      cfg.helpers.Puppeteer.chrome = merge(
        cfg.helpers.Puppeteer.chrome || {}, 
        { args, defaultViewport: null, } // disables viewport emualtion. See https://github.com/Codeception/CodeceptJS/issues/1209#issuecomment-522487793
      );
    }

    if (cfg.helpers.Playwright) {
      if (!cfg.helpers.Playwright.browser || cfg.helpers.Playwright.browser === 'chromium') {
        const args = ['--no-sandbox', `--window-size=${width},${height}`];
        cfg.helpers.Playwright.chromium = merge(
          cfg.helpers.Playwright.chromium || {}, 
          { args, defaultViewport: null, } // disables viewport emualtion. See https://github.com/Codeception/CodeceptJS/issues/1209#issuecomment-522487793
        );
      }
      cfg.helpers.Playwright.windowSize = `${width}x${height}`;
    }

    if (cfg.helpers.Protractor) {
      cfg.helpers.Protractor.windowSize = `${width}x${height}`;
    }
    if (cfg.helpers.Nightmare) {
      cfg.helpers.Nightmare.windowSize = `${width}x${height}`;
    }
    if (cfg.helpers.TestCafe) {
      cfg.helpers.TestCafe.windowSize = `${width}x${height}`;
    }
    if (cfg.helpers.WebDriver) {
      cfg.helpers.WebDriver.windowSize = `${width}x${height}`;
    }
  });
}
