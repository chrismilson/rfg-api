import { FaviconGenerationManifest } from '../../types'

/**
 * A default request object with: 
 * 
 * - An API Key;
 * - An inline master picture;
 * - A default config for each favicon design;
 * - A path location set to 'icons'; and,
 * - Some base settings.
 */
const request: FaviconGenerationManifest = {
  api_key: 'f26d432783a1856427f32ed8793e1d457cc120f1',
  master_picture: {
    type: 'inline',
    content: 'iVBORw0KGgoAAAANSUhEUgAABFMAAARTCAIAAAAoRvvGAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH3AwNFwoMdIJSfAAAIABJREFUeNrsnXecHVXd'
  },
  favicon_design: {
    ios: {
      picture_aspect: 'no_change'
    }
  },
  files_location: {
    type: 'path',
    path: 'icons'
  },
  settings: {
    compression: 0,
    scaling_algorithm: 'Lanczos',
    error_on_image_too_small: false,
    readme_file: false,
    html_code_file: false,
    use_path_as_is: false
  }
}

export default request