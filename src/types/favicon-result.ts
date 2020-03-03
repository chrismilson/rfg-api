export default interface FaviconResult {
  /** The url of the zipped package. */
  package_url: string
  /** The individual addresses of the icons. */
  files_urls: string[]
  /** Html code to incude in your document. */
  html_code: string
  compression: boolean
  /** This is a list of markups that the html code will influence. */
  overlapping_markups: string[]
}
