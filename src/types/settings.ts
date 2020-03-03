export default interface Settings {
  /**
   * Set the compression level, from 0 (no compression) to 5 (highest
   * compression level).
   */
  compression: number
  /** Set the scaling algorithm. */
  scaling_algorithm:
    | 'Mitchell'
    | 'NearestNeighbor'
    | 'Cubic'
    | 'Bilinear'
    | 'Lanczos'
    | 'Spline'
  /**
   * When the master picture is too small for a particular, requested platform,
   * nothing is generated for that platform. For example, if the request
   * contains a coast section, the master picture should be at least 228x to
   * produce the Coast icon. If the picture is smaller, the outcome of the
   * request depends on this value.
   */
  error_on_image_too_small: boolean
  /**
   * If set to true, generate README.md, which summarizes the package manual
   * installation steps.
   */
  readme_file: boolean
  /**
   * If set to true, generate html_code.html, which contains the icons HTML
   * markups. This file can be inlined as is in HTML pages.
   */
  html_code_file: boolean
  /**
   * This parameter is related with
   * [Issue#270](https://github.com/RealFaviconGenerator/realfavicongenerator/issues/270).
   *
   * Usually, the client tells where the icons are going to be hosted (eg. root
   * directory of the web site) and expects RealFaviconGenerator to compute the
   * HTML and various files (Web App Manifest, etc.) accordingly.
   *
   * However, there are situations where the client has a particular
   * requirement, which is to find the path everywhere it can appear. For
   * example, [this
   * plugin](https://github.com/RealFaviconGenerator/rails_real_favicon) for
   * Ruby on Rails wants to post-process RealFaviconGenerator assets to make
   * these resources part of the RoR asset pipeline.
   *
   * This conflicts with the Web App Manifest, which uses paths relative to the
   * images it references. When the icon path is relative (eg. sub/dir), the Web
   * App Manifest is not supposed to use this path (eg. some-icon.png should be
   * sub/dir/some-icon.png).
   *
   * This used to be an issue in RealFaviconGenerator, and some API clients
   * relied on it. The use_path_as_is parameter was introduced to deal with this
   * situation.
   *
   * Its behavior:
   *
   * - ***false*** Let RealFaviconGenerator compute the paths in order to get a
   *   working package. For example, Wep App Manifest and Browser configuration
   *   have different policies, and RealFaviconGenerator takes this into
   *   account. This is the behavior you expect when creating your favicon by
   *   visiting RealFaviconGenerator web site.
   * - ***true*** Force RealFaviconGenerator to insert the path everywhere. This
   *   option makes sense only when expecting to post-process the generated
   *   assets. For example, you can pass DummyPathReplaceIt12456 as the path and
   *   set use_path_as_is to true. Then, when the API returns the package,
   *   search/replace this particular string with something useful, like
   *   templating content. In order to preserve backward compatibility,
   *   use_path_as_is defaults to true, even if the opposite would have been
   *   more logical. If you are working on a client that do not need to
   *   post-process the favicon package, you should explicitely set this
   *   parameter to false.
   */
  use_path_as_is?: boolean
}
