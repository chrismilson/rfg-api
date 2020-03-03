# rfg-api

Implementation of the [RealFaviconGenerator API](http://realfavicongenerator.net/api)
for [Node.js](https://nodejs.org).

## Getting Started

This plugin implements the
[non-interactive API of RealFaviconGenerator.net](https://realfavicongenerator.net/api/non_interactive_api).
This API lets you create favicons for all platforms: desktop browsers, iOS, Android, etc.

### Install

```bash
npm install rfg-api --save
```

### Usage

```ts
import { generateFavicon, createRequest } from 'rfg-api'

generateFavicon(createRequest({

}))
  .then(/* do something with api response */)
  .catch(/* handle errors */)
```

*DEPRECATED*
```js
const rfg = require('rfg-api').init()

rfg.generateFavicon(
  rfg.createRequest({

  }),
  '.',
  (err, result) => {
    if (err) {/* handle errors */}

    /* do something with api response */
  }
)
```