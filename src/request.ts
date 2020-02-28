import fs from 'fs'
import { FaviconGenerationManifest, ManifestRequestOptions } from './types'

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

/**
 * Creates a favicon geneation manifest that is in the correct format for the
 * rest api. The rest api has some quirks, so this method should help the end
 * user build a valid config for generating a favicon.
 *
 * @param options
 */
export default function createRequest(
  options: ManifestRequestOptions
): FaviconGenerationManifest {
  return {
    // The format of the config is specified by the rest api.
    // eslint-disable-next-line @typescript-eslint/camelcase
    api_key: options.apiKey,
    // eslint-disable-next-line @typescript-eslint/camelcase
    master_picture: normaliseMasterPicture(options.masterPicture),
    // eslint-disable-next-line @typescript-eslint/camelcase
    files_location: normaliseFilesLocation(options.output),
    // eslint-disable-next-line @typescript-eslint/camelcase
    favicon_design: options.designs,
    settings: options.settings,
    versioning: options.versioning
  }
}
