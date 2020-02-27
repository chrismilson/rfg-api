import FaviconDesigns from './favicon-design'
import MasterPicture from './master-picture'
import FilesLocation from './files-location'
import Settings from './settings'

export interface FaviconGenerationManifest {
  /** 
   * Your API key. Get a key
   * [here](https://realfavicongenerator.net/api#register_key).
   */
  api_key: string
  master_picture: MasterPicture
  files_location: FilesLocation
  favicon_design: FaviconDesigns
  settings: Settings
  /**
   * When a browser loads a favicon for the first time, it tends to cache it and
   * to never load it again. When your web site is not new and you want to
   * update your favicon, that can be a problem: your loyal visitors won't
   * notice the change. A workaround is to append a version to the favicon URLs
   * as a query parameter. This setion lets you do just that.
   *
   * When this section is absent or set to false (ie. versioning: false), the
   * favicon files are not versioned. When this section is set to true (ie.
   * versioning: true), versioning is generated. The query parameter name is v
   * and the value is a hashed timestamp.
   */
  versioning?: boolean
}