const IO3D_BASE_URL = 'https://storage-nocdn.3d.io'
const API_KEY = 'thisWillChange'

export default {
  getShortCode (directory) {
    return fetch(`https://app.3d.io/get-short-id/${directory.replace(/^\//, '')}`, {
      method: 'POST',
      headers: {
        'X-API-Key': API_KEY
      }
    }).then((res) => res.text())
  },
  getDirectory (shortCode) {
    return fetch(`https://app.3d.io/get-dir/${shortCode}`).then((res) => res.text())
  },
  readFromDirectory (directory) {
    return fetch(`${IO3D_BASE_URL}${directory}index.html?x=${Date.now()}`, {mode: 'cors'}).then((res) => res.text())
  }
}
