import { FaviconGenerationRequest, FaviconGenerationResult } from './types'
import * as fs from 'fs'
import axios from 'axios'
import * as unzipper from 'unzipper'

/**
 * Calls on the rest api to generate favicon assets according to a config
 * object.
 *
 * @param request The generation config.
 * @param dest The path to the output.
 * @param callback A callback function to handle the result. ***deprecated***
 */
export function generateFavicon(
  request: FaviconGenerationRequest,
  dest: string
): Promise<FaviconGenerationResult>
export function generateFavicon(
  request: FaviconGenerationRequest,
  dest: string,
  callback: (err?: Error, result?: FaviconGenerationResult) => void
): Promise<void>
export async function generateFavicon(
  request: FaviconGenerationRequest,
  dest: string,
  callback?: (err?: Error, result?: FaviconGenerationResult) => void
): Promise<FaviconGenerationResult | void> {
  try {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest)

    const result = await axios
      .post('https://realfavicongenerator.net/api/favicon', {
        // eslint-disable-next-line @typescript-eslint/camelcase
        favicon_generation: request
      })
      .then(async response => {
        const { favicon_generation_result: result } = response.data

        // the response will contain a url to download a zip of the assets.
        await axios
          .get(result.favicon.package_url, { responseType: 'stream' })
          .then(res => {
            // we will unzip the assets to the specified output folder.
            res.data.pipe(unzipper.Extract({ path: dest }))
          })

        return result
      })
    if (callback) callback(undefined, result)
    return result
  } catch (err) {
    if (callback) {
      callback(err)
    } else {
      throw err
    }
  }
}
