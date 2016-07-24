# [hyperterm](https://hyperterm.org/)-final-say [![npm version](https://img.shields.io/npm/v/hyperterm-final-say.svg?style=flat-square)](http://www.npmjs.com/package/hyperterm-final-say)

Allows user-set overrides of any plugin or theme settings applied on top of the defaults `./.hyperterm.js`.

### Install

1. Open HyperTerm's preferences with `Cmd+,` (or manually at `~/.hyperterm.js`) with your editor.
2. Put `hyperterm-final-say` as **last one** of plugin list, like so:

  ```js
  plugins: [
    // 'hyperterm-plugin-xxx',
    // 'hyperterm-theme-xxx',
    'hyperterm-final-say'
  ],
  ```
3. Fully reload HyperTerm (`Cmd+Shift+R`).

### License

MIT @ Amio
