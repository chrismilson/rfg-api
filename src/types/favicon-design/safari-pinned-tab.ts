export interface BaseSafariPinnedTabFaviconDesign {
  /** The theme color. Usually the dominant color of the master picture. */
  theme_color: string
}

export interface NoChangeSafariPinnedTabFaviconDesign
  extends BaseSafariPinnedTabFaviconDesign {
  /**
   * Use the master picture as is. Since this image must be in SVG format, the
   * master picture must also be an SVG if this option is chosen.
   */
  picture_aspect: 'no_change'
}

export interface SilhouetteSafariPinnedTabFaviconDesign
  extends BaseSafariPinnedTabFaviconDesign {
  /**
   * Turn the master picture as a silhouette: transparent regions remain
   * transparent and the opaque regions become black.
   *
   * Since the master picture is often a PNG, it is converted to SVG.
   */
  picture_aspect: 'silhouette'
}

export interface BlackAndWhiteSafariPinnedTabFaviconDesign
  extends BaseSafariPinnedTabFaviconDesign {
  /**
   * Turn the master picture into a black-and-white pictures. Use the threshold
   * option to indicate how colors should be turned to black or white.
   *
   * Since the master picture is often a PNG, it is converted to SVG.
   */
  picture_aspect: 'black_and_white'
  /**
   * A number from 0 to 100 indicating how colors should be turned to black or
   * white. A lower number means a whiter icon.
   */
  threshold: number
}

/**
 * The pinned tab for Safari comes with version 9 and Mac OS X El Capitan. This
 * is an SVG image with no background (ie. transparent) where paths must be
 * black.
 */
declare type SafariPinnedTabFaviconDesign =
  | NoChangeSafariPinnedTabFaviconDesign
  | SilhouetteSafariPinnedTabFaviconDesign
  | BlackAndWhiteSafariPinnedTabFaviconDesign

export default SafariPinnedTabFaviconDesign
