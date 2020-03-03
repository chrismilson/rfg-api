export interface BaseIOSFaviconDesign {
  /**
   * This section lets you define a startup image for iOS. If it is not present,
   * no startup image is created.
   *
   * Use background_and_margin to declare a background color. If none is
   * specified, the background_and_margin of the iOS Touch icon will be used.
   *
   * Warning: if no background color was defined at all, the API will generate a
   * startup image with transparent margins. iOS prevents this and will fill the
   * transparent regions with black.
   *
   * You can also override the picture used to created the startup image with a
   * master_picture declaration.
   */
  startup_image?: string
  /**
   * The app name. When defined, this value is used by Safari as the default
   * home screen caption (instead of the page title).
   */
  app_name?: string
  /**
   * One icon is enough to support all iOS devices. However, it is sometimes
   * useful to have more than one. Whatever the chosen options, at least one
   * icon is created and declared in the HTML.
   *
   * If you don't want iOS support at all, just discard the whole ios section.
   */
  assets?: {
    /** Generate icons for iOS 6 and prior. */
    ios6_and_prior_icons?: boolean
    /** Generate icons for iOS 7 and later. */
    ios7_and_later_icons?: boolean
    /** Generate precomposed icons, in addition to regular icons. */
    precomposed_icons?: boolean
    /**
     * If true, only the default icon are declared in the HTML. Else, all
     * regular (ie. non-precompued) icons are declared.
     */
    declare_only_default_icon?: boolean
  }
}

export interface NoChangeIOSFaviconDesign extends BaseIOSFaviconDesign {
  /**
   * Use the master picture as is.
   */
  picture_aspect: 'no_change'
}

export interface BackgroundAndMarginIOSFaviconDesign
  extends BaseIOSFaviconDesign {
  /**
   * Apply a background and a margin to the master picture.
   * When using this value, also specify margin and background_color.
   */
  picture_aspect: 'background_and_margin'
  /**
   * The margin to apply to the master picture to produce the Apple Touch icon.
   * The margin is set in pixels, for a 57x57 picture. So 3 will generate a 3
   * pixels margin for a 57x57 icon and 9 pixels for a 180x180 icon. It can also
   * be a percentage, such as 5%.
   */
  margin: number | string
  /**
   * The background color applied as the background of the Apple Touch icon.
   */
  background_color: string
}

declare type IOSFaviconDesign =
  | NoChangeIOSFaviconDesign
  | BackgroundAndMarginIOSFaviconDesign

export default IOSFaviconDesign
