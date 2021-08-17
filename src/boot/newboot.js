
import { boot } from 'quasar/wrappers'
import axios from 'axios'

boot: [
  {
    server: false, // run on client-side only!
    path: '<name>' // references /src/boot/<name>.js
  },
  {
    client: false, // run on server-side only!
    path: '<name>' // references /src/boot/<name>.js
  }
]

ctx.mode.electron ? 'some-file' : ''

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default ({ urlPath }) => {
  return new Promise((resolve, reject) => {
    // ...
    const isAuthorized = // ...
    if (!isAuthorized && !urlPath.startsWith('/login')) {
      reject({ url: '/login' })
      return
    }
    // ...
  })
}