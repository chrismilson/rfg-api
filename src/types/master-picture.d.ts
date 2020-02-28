interface URLMasterPicture {
  /** There is a master picture to transmit, passed by URL. */
  type: 'url'
  /** The URL of the picture. */
  url: URL
}

interface InlineMasterPicture {
  /** There is a master picture to transmit, inlined in the JSON document. */
  type: 'inline'
  /** The content of the picture, encoded in Base64. */
  content: string
}

/**
 * This type of master picture cannot be sent to the REST Api.
 * It CAN however be converted into something suitable with the createRequest
 * method.
 */
export interface PathMasterPicture {
  /** There is a master picture to transmit, located in the local filesystem. */
  type: 'path'
  /** The path to the master picture */
  path: string
}

type MasterPicture = URLMasterPicture | InlineMasterPicture

export default MasterPicture