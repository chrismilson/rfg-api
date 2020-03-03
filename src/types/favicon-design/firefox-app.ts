export interface BaseFirefoxAppFaviconDesign {
  manifest: {
    /** The application name. */
    app_name: string
    /** A description of the application. */
    app_description: string
    /** The developer name. */
    developer_name: string
    /**
     * If there is an existing manifest file, RealFaviconGenerator can update it
     * instead of creating a new one. If so, pass it with the existing_manifest
     * attribute. Make sure to value this attribute with an encoded version of
     * this JSON document: it must appear as a regular string.
     *
     * Use on_conflict to indicate how to react in case of conflict. If the
     * existing manifest contains an entry that RealFaviconGenerator also
     * generates:
     *
     * raise_error: An error is raised and the API call fails. override: The
     * original value is replaced by the new one. keep_existing: The original
     * value is kept and the new one is ignored.
     */
    existing_manifest: JSON
  }
}

export interface NoChangeFirefoxAppFaviconDesign
  extends BaseFirefoxAppFaviconDesign {
  /** Use the master picture as is. */
  picture_aspect: 'no_change'
}

export interface BackgroundColorAndMargin {
  /** Circle background color. */
  background_color: string
  /**
   * Margin to apply to the master picture. Given in pixels for a 60x60 icon,
   * or a percentage.
   */
  margin: number | string
}

export interface CircleFirefoxAppFaviconDesign
  extends BaseFirefoxAppFaviconDesign,
    BackgroundColorAndMargin {
  /**
   * Generate a circular icon. This is the primary icon format used in Firefox
   * OS.
   */
  picture_aspect: 'circle'
  /**
   * If true, the master picture is shrunk in order to fit the circle.
   * Otherwise, the master picture may extend beyond the circle.
   */
  keep_picture_in_circle: boolean
  /**
   * If keep_picture_in_circle is set to true, this is the margin applied to the
   * cropping of the master picture.
   */
  circle_inner_margin: number
  /** If true, add the overlay. */
  overlay: boolean
}

export interface RoundedSquareFirefoxAppFaviconDesign
  extends BaseFirefoxAppFaviconDesign,
    BackgroundColorAndMargin {
  picture_aspect: 'rounded_square'
}

export interface SquareFirefoxAppFaviconDesign
  extends BaseFirefoxAppFaviconDesign,
    BackgroundColorAndMargin {
  picture_aspect: 'square'
}

/**
 * Define a manifest and icons for Firefox OS. Some of the following parameters
 * are injected in the generated manifest. When a value is missing, the
 * corresponding manifest field is filled with "TODO".
 */
declare type FirefoxAppFaviconDesign =
  | NoChangeFirefoxAppFaviconDesign
  | CircleFirefoxAppFaviconDesign
  | RoundedSquareFirefoxAppFaviconDesign
  | SquareFirefoxAppFaviconDesign

export default FirefoxAppFaviconDesign
