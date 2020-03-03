import { fileToBase64, fileToBase64Sync } from './file-to-base-64'

export { fileToBase64, fileToBase64Sync }

export function init() {
  return {
    fileToBase64,
    fileToBase64Sync
  }
}
