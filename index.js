const deepAssign = require('deep-assign')
const { resolve } = require('path')
const { homedir } = require('os')
const userConfigPath = resolve(homedir(), '.hyperterm.js')

module.exports.decorateConfig = config => {
  let userConfig = {}

  try {
    delete require.cache[userConfigPath]
    userConfig = require(userConfigPath).config
  } catch (e) {
    console.error('ERR:', e)
  }

  userConfig.css = [config.css || '', userConfig.css || ''].join('\\n')
  userConfig.termCSS = [config.termCSS || '', userConfig.termCSS || ''].join('\\n')
  userConfig.fontSize = userConfig.fontSize || 12

  return deepAssign({}, config, userConfig)
}
