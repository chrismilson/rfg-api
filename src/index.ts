import axios from 'axios'
import { FaviconGenerationManifest } from './types'

/**
 * @param request The favicon generation manifest
 * @param dest 
 */
export async function generateFavicon(
  request: FaviconGenerationManifest,
  dest: string
) {
  // send a post request to the rest api to generate the favicon.
  const { data } = await axios.post(
    'https://realfavicongenerator.net/api/favicon',
    { favicon_generation: request }
  )
  
  console.log(data)
}

export function createRequest() {

}

export function injectFaviconMarkups() {

}