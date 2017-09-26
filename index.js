const os = require('os');
const path = require('path');
const deepAssign = require('deep-assign');

const localConfigPath = path.join(os.homedir(), '.hyper.js');

module.exports.decorateConfig = config => {
  let userConfig = {};

  try {
    delete require.cache[localConfigPath];
    userConfig = require(localConfigPath).config;
  } catch (e) {
    console.error('ERR:', e);
    return config
  }

  userConfig.css = [config.css, userConfig.css].join('\n');
  userConfig.termCSS = [config.termCSS, userConfig.termCSS].join('\n');

  return deepAssign({}, config, userConfig);
};
