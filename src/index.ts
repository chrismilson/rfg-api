import { fileToBase64, fileToBase64Sync } from './file-to-base-64'
import { generateFavicon } from './generate-favicon'

export { fileToBase64, fileToBase64Sync, generateFavicon }

export function init() {
  return {
    fileToBase64,
    fileToBase64Sync,
    generateFavicon
  }
}
