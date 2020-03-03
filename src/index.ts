import { fileToBase64, fileToBase64Sync } from './file-to-base-64'
import { generateFavicon } from './generate-favicon'
import { injectFaviconMarkups } from './inject-favicon-markups'
import {
  camelCaseToUnderscore,
  camelCaseToUnderscoreRequest
} from './camel-to-underscore'

export {
  fileToBase64,
  fileToBase64Sync,
  generateFavicon,
  injectFaviconMarkups,
  camelCaseToUnderscore,
  camelCaseToUnderscoreRequest
}

export function init() {
  return {
    fileToBase64,
    fileToBase64Sync,
    generateFavicon,
    injectFaviconMarkups,
    camelCaseToUnderscore,
    camelCaseToUnderscoreRequest
  }
}
