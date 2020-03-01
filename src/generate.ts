import axios from 'axios'
import unzipper from 'unzipper'
import { FaviconGenerationManifest, FaviconGenerationResult } from './types'

/**
 * When supplied with a valid request object, will use the REST API to generate
 * the desired icons and write them to a destination folder.
 *
 * @param request The favicon generation manifest
 * @param dest
 */
export function generateFavicon(
  request: FaviconGenerationManifest,
  dest: string
)
export function generateFavicon(
  request: FaviconGenerationManifest & { output: string }
)
export default async function generateFavicon(
  request: FaviconGenerationManifest & { output?: string },
  dest?: string
): Promise<FaviconGenerationResult> {
  // send a post request to the rest api to generate the favicon.
  // The response should give us the status of our request, and a URL to
  // download a zip of the assets from.
  const { data } = await axios.post(
    'https://realfavicongenerator.net/api/favicon',
    {
      // The format of the config is specified by the rest api.
      // eslint-disable-next-line @typescript-eslint/camelcase
      favicon_generation: request
    }
  )

  // assume success
  const { package_url: zipURL } = data.favicon_generation_result.favicon

  // download the package and extract it to the destination
  await axios.get(zipURL, { responseType: 'stream' }).then(res => {
    res.data.pipe(unzipper.Extract({ path: dest || request.output }))
  })

  return data.favicon_generation_result
}
