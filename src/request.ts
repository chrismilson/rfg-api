import fs from 'fs'
import {
  FaviconGenerationManifest,
  ManifestRequestOptions
} from './types'

export default function createRequest(
  options: ManifestRequestOptions
): FaviconGenerationManifest {

  return {
    api_key: options.apiKey,
    master_picture: normaliseMasterPicture(options.masterPicture),
    files_location: normaliseFilesLocation(options.output),
    favicon_design: options.designs,
    settings: options.settings,
    versioning: options.versioning
  }
}

function normaliseMasterPicture(
  options: ManifestRequestOptions['masterPicture']
): FaviconGenerationManifest['master_picture'] {
  if (options.type === 'path') {
    return {
      type: 'inline',
      content: fs.readFileSync(options.path).toString('base64')
    }
  }

  return options
}

function normaliseFilesLocation(
  path?: ManifestRequestOptions['output']
): FaviconGenerationManifest['files_location'] {
  if (!path) return { type: 'root' }

  return {
    type: 'path',
    path
  }
}