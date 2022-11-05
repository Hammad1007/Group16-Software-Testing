const { config } = require('../codeceptjs');

module.exports = function(browser) {
  if (!browser) return;

  config.addHook(cfg => {
    if (!cfg.helpers) return;
    if (cfg.helpers.Puppeteer) {
      checkAllowedBrowser('Puppeteer', ['firefox','chrome']);
      cfg.helpers.Puppeteer.product = browser;
    }
    if (cfg.helpers.Playwright) {
      checkAllowedBrowser('Playwright', ['chromium','webkit','firefox']);
      cfg.helpers.Playwright.browser = browser;
    }    
    if (cfg.helpers.TestCafe) {
      checkAllowedBrowser('TestCafe', ['chromium', 'chrome', 'chrome-canary', 'ie', 'edge', 'firefox', 'opera', 'safari']);
      cfg.helpers.TestCafe.browser = browser;
    }
    if (cfg.helpers.WebDriver) {
      cfg.helpers.WebDriver.browser = browser;
    }
    if (cfg.helpers.Protractor) {
      cfg.helpers.Protractor.browser = browser;
    }    
  });

  function checkAllowedBrowser(engine, values = []) {
    if (!values.includes(browser)) {
      throw new Error(`Browser ${browser} is not supported by ${engine} engine`);
    }
  }
}
