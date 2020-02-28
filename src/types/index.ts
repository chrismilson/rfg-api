import APIKey from './api-key'
import MasterPicture, { PathMasterPicture } from './master-picture'
import FaviconDesigns from './favicon-design'
import FilesLocation from './files-location'
import FaviconResult from './favicon-result'
import Settings from './settings'
import Versioning from './versioning'

export interface FaviconGenerationManifest {
  api_key: APIKey
  master_picture: MasterPicture
  files_location: FilesLocation
  favicon_design: FaviconDesigns
  settings?: Settings
  versioning?: Versioning
}

export interface FaviconGenerationResult {
  result: { status: string }
  favicon: FaviconResult
  files_location: FilesLocation
  preview_picture_url: string
  version: string
}

export interface ManifestRequestOptions {
  apiKey: APIKey
  masterPicture: MasterPicture | PathMasterPicture
  /** Optionally set the path  */
  output?: string
  designs: FaviconDesigns
  settings?: Settings
  versioning?: Versioning
}
