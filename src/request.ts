import fs from 'fs'
import path from 'path'
import { FaviconGenerationManifest, ManifestRequestOptions } from './types'

function normaliseMasterPicture(
  options: ManifestRequestOptions['masterPicture']
): FaviconGenerationManifest['master_picture'] {
  try {
    const url = new URL(options)
    return { type: 'url', url }
  } catch (e) {
    // if it is not a valid url it will throw.
    // now we should check if it is a valid path.
    const p = path.resolve(process.cwd(), options)
    return {
      type: 'inline',
      content: fs.existsSync(p)
        ? fs.readFileSync(p).toString('base64')
        : options // interpret the base value as inline.
    }
  }
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
