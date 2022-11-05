const { container, config, event, output } = require('../codeceptjs');

module.exports = function() {
  const browserHelpers = ['WebDriver','Protractor','Playwright','Puppeteer','TestCafe','Nightmare'];
  config.addHook(cfg => {
    const helper = detectBrowserHelper(cfg.helpers);
    let cookies;
    const shareCookiesFn = async (request) => {
      try {
        if (!cookies) cookies = await container.helpers(helper).grabCookie();
        request.headers = { ...request.headers, Cookie: cookies.map(c => `${c.name}=${c.value}`).join('; ') };      
      } catch (err) {
        output.error('Can\'t fetch cookies from the current browser. Open a browser and log in before performing request');
      }
    }
    if (cfg.helpers.REST) {
      cfg.helpers.REST.onRequest = shareCookiesFn;
    }
    if (cfg.helpers.ApiDataFactory) {
      cfg.helpers.ApiDataFactory.onRequest = shareCookiesFn;
    }
    if (cfg.helpers.GraphQL) {
      cfg.helpers.GraphQL.onRequest = shareCookiesFn;
    }
    if (cfg.helpers.GraphQLDataFactory) {
      cfg.helpers.GraphQLDataFactory.onRequest = shareCookiesFn;
    }
    event.dispatcher.on(event.test.finished, () => {
      cookies = null;
    });    
  });
  
  function detectBrowserHelper(helperConfig) {
    if (!helperConfig) return false;
    for (const helper of browserHelpers) {
      if (Object.keys(helperConfig).indexOf(helper) >= 0) return helper;
    }
  }
}
