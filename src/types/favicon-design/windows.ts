interface BaseWindowsFaviconDesign {
  /** The background color to apply to the tile. */
  background_color: string
  /**
   * By default, 5 icons are generated: 4 for Windows 8.1 and 11 (running IE 11
   * or Edge) and 1 for Windows 8.0 (running IE 10). The icons can be enabled or
   * disabled one by one.
   */
  assets?: {
    windows_80_ie_10_tile: boolean
    windows_10_ie_11_edge_tiles: {
      small: boolean
      medium: boolean
      big: boolean
      rectangle: boolean
    }
  }
  /**
   * If there is an existing browserconfig.xml file, RealFaviconGenerator can
   * update it instead of creating a new one. If so, pass it with the
   * existing_manifest attribute. Make sure to JSON-encode this XML document to
   * avoid any JSON syntax error.
   *
   * Use on_conflict to indicate how to react in case of conflict. If the
   * existing manifest contains an entry that RealFaviconGenerator also
   * generates:
   *
   * raise_error: An error is raised and the API call fails. override: The
   * original value is replaced by the new one. keep_existing: The original
   * value is kept and the new one is ignored.
   */
  existing_manifest?: string
  /**
   * The app name. When defined, this value is used by IE as the default home
   * screen caption (instead of the page title).
   */
  app_name?: string
}

interface NoChangeWindowsFaviconDesign extends BaseWindowsFaviconDesign {
  /** Use the master picture as is. */
  picture_aspect: 'no_change'
}

interface WhiteSilhouetteWindowsFaviconDesign
extends BaseWindowsFaviconDesign {
  /** Turn the master picture into a white silhouette. */
  picture_aspect: 'white_silhouette'
}

type WindowsFaviconDesign =
  NoChangeWindowsFaviconDesign |
  WhiteSilhouetteWindowsFaviconDesign

export default WindowsFaviconDesign