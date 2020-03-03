import { fileToBase64, fileToBase64Sync } from './file-to-base-64'
import { generateFavicon } from './generate-favicon'
import { injectFaviconMarkups } from './inject-favicon-markups'

export { fileToBase64, fileToBase64Sync, generateFavicon, injectFaviconMarkups }

export function init() {
  return {
    fileToBase64,
    fileToBase64Sync,
    generateFavicon,
    injectFaviconMarkups
  }
}
