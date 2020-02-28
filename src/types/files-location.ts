interface RootFilesLocation {
  /**
   * The favicon files are expected to be placed in the root directory of the
   * web site.
   */
  type: 'root'
}

interface PathFilesLocation {
  /**
   * The favicon files are expected to be placed in a specific directory of the
   * web site.
   */
  type: 'path'
  /**
   * The path to the icons.
   */
  path: string
}

type FilesLocation = RootFilesLocation | PathFilesLocation

export default FilesLocation
