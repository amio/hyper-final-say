const os = require('os')
const path = require('path')

module.exports.decorateConfig = config => {
  let userConfig = {}
  try {
    const userConfigPath = path.join(os.homedir(), '.hyperterm.js')
    delete require.cache[userConfigPath]
    userConfig = require(userConfigPath).config
  } catch (e) {
    console.error(e)
  }
  return Object.assign({}, config, userConfig)
}
