const { config } = require('../codeceptjs');
const merge = require('../deepMerge');

module.exports = function(when) {
  if (!when) return;

  config.addHook(cfg => {
    if (!cfg.helpers) return;
    if (cfg.helpers.Puppeteer) {
      cfg.helpers.Puppeteer.show = false;
    }
    if (cfg.helpers.Playwright) {
      cfg.helpers.Playwright.show = false;
    }
    if (cfg.helpers.Nightmare) {
      cfg.helpers.Nightmare.show = false;
    }
    if (cfg.helpers.TestCafe) {
      cfg.helpers.TestCafe.show = false;
    }
    if (cfg.helpers.WebDriver) {
      if (cfg.helpers.WebDriver.browser === 'chrome') {

        cfg.helpers.WebDriver.desiredCapabilities = merge(
          cfg.helpers.WebDriver.desiredCapabilities || {},
          {
            chromeOptions: {
              args: [
                "--headless",
                // Use --disable-gpu to avoid an error from a missing Mesa library, as per
                // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
                "--disable-gpu"
              ]
            }
          }
        )
      } else if (cfg.helpers.WebDriver.browser === 'firefox') {
        cfg.helpers.WebDriver.desiredCapabilities = merge(
            cfg.helpers.WebDriver.desiredCapabilities || {},
            {
              firefoxOptions: {
                args: [
                  "--headless",
                ]
              }
            }
        )
      }
    }
  });
}
