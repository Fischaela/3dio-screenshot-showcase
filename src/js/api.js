import io3d from '3dio'

const IO3D_BASE_URL = 'https://storage-nocdn.3d.io'
const API_KEY = 'thisWillChange'

export default {
  // oldCode is saved to new location
  // new shortId is generated and updated in code and returned
  saveAsCopy (oldCode, oldId) {
    let blob = new Blob([oldCode], { type: 'text/html' })
    let filekey
    // save initial code to new location
    return io3d.storage.put(blob, { fileName: 'index.html' })
      .then(key => {
        filekey = key
        // get a new shortUrl from the s3 key
        return this.getShortCode(key.replace('/index.html', ''))
      })
      .then(shortUrl => {
        // extract shortId from shortUrl
        const shortId = shortUrl.replace('https://app.3d.io/', '')
        // a reference to the id is saved in the html code - we need to update that
        const newCode = oldCode.replace(`id="${oldId}"`, `id="${shortId}"`)
        // update the file with the new id
        blob = new Blob([newCode], { type: 'text/html' })
        return io3d.storage.put(blob, {key: filekey})
          .then(result => {
            // return id
            return shortId
          })
          .catch(error => {
            console.log(error)
          })
      })
  },
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
