const { config } = require('../codeceptjs');

module.exports = function() {

  config.addHook(cfg => {
    if (!cfg.plugins) cfg.plugins = {};
    cfg.plugins.tryTo = cfg.plugins.tryTo || { enabled: true };
    cfg.plugins.retryFailedStep = cfg.plugins.retryFailedStep || { enabled: false };
    cfg.plugins.retryTo = cfg.plugins.retryTo || { enabled: true };
    cfg.plugins.eachElement = cfg.plugins.eachElement || { enabled: true };
    cfg.plugins.pauseOnFail = cfg.plugins.pauseOnFail || {};
    cfg.plugins.screenshotOnFail = cfg.plugins.screenshotOnFail || {};
  });
}
