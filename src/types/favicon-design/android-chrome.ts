interface BaseAndroidChromeFaviconDesign {
  /**
   * This section describes the manifest.
   */
  manifest: {
    /**
     * The application name is used as the title of the link when the visitor
     * adds the site to the home screen. There is no way to force Android Chrome
     * to use the current page title.
     */
    name: string
    /**
     * The page actually added to the home screen. Typically, the home page of
     * the site. Leave this field blank to let a visitor add any page to the
     * home screen.
     */
    start_url?: string
    /**
     * Specify the appearance of the web site when the user clicks the home
     * scren link:
     *
     * - ***browser*** The site is opened like any regular bookmark, in a new
     *   Chrome tab. Because Android Chrome does not actually support the
     *   browser attribute, the display attribute is completely absent of the
     *   generated manifest.
     *
     * - ***standalone*** The web site is somehow treated like a native
     *   application. When the home screen link is clicked, a new Chrome
     *   instance is opened, the navigation UI is not displayed and the web site
     *   is displayed full-screen.
     */
    display: 'browser' | 'standalone'
    /**
     * When present and display is standalone, force the screen to a particular
     * orientation.
     */
    orientation?: 'portrait' | 'landscape'
    /**
     * The color applied to the standalone app when using the task switcher.
     *
     * Introduced in Android 5 Lollipop.
     */
    theme_color: string
    /**
     * If there is an existing manifest file, RealFaviconGenerator can update it
     * instead of creating a new one. If so, pass it with the
     * `existing_manifest` attribute. Make sure to value this attribute with an
     * encoded version of this JSON document: it must appear as a regular
     * string.
     *
     * Use `on_conflict` to indicate how to react in case of conflict. If the
     * existing manifest contains an entry that RealFaviconGenerator also
     * generates:
     *
     * raise_error: An error is raised and the API call fails. override: The
     * original value is replaced by the new one. keep_existing: The original
     * value is kept and the new one is ignored.
     */
    existing_manifest: JSON
  }
  assets?: {
    /**
     * If true, the service generates icons and HTML markups for Android Chrome
     * running on Android Chrome M38 and prior.
     */
    legacy_icon?: boolean
    /**
     * If true, the service creates all documented icons for [home
     * screen](https://developer.chrome.com/multidevice/android/installtohomescreen#manifestmetadata)
     * and [splash
     * screen](https://developers.google.com/web/updates/2015/10/splashscreen?hl=en).
     * Else, it creates only [recommended, high resolution
     * icons](https://github.com/GoogleChrome/lighthouse/issues/291).
     */
    low_resolution_icons?: boolean
  }
}

interface NoChangeAndroidChromeFaviconDesign
  extends BaseAndroidChromeFaviconDesign {
  /** Use the master picture as is. */
  picture_aspect: 'no_change'
}

interface BackgroundAndMarginAndroidChromeFaviconDesign
  extends BaseAndroidChromeFaviconDesign {
  /** Generate a square icon with margin and background. */
  picture_aspect: 'background_and_margin'
  margin: number | string
  background_color: string
}

interface ShadowAndroidChromeFaviconDesign
  extends BaseAndroidChromeFaviconDesign {
  /**
   * Add a small drop shadow to the master picture. This effect is used by
   * several Google apps, such as Chrome, Gmail, Drive or Inbox.
   */
  picture_aspect: 'shadow'
}

/**
 * Android Chrome M39 introduces a manifest file with corresponding icons. The
 * manifest and icons are generated only if the android_chrome section is
 * present.
 */
type AndroidChromeFaviconDesign =
  | NoChangeAndroidChromeFaviconDesign
  | BackgroundAndMarginAndroidChromeFaviconDesign
  | ShadowAndroidChromeFaviconDesign

export default AndroidChromeFaviconDesign
