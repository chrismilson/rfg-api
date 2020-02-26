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

type MasterPicture = URLMasterPicture | InlineMasterPicture

export default MasterPicture