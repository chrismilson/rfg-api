import metaparser from 'metaparser'

/**
 * Injects html code into a target html file.
 *
 * @param htmlFile The target html file to inject markup into.
 * @param htmlCode The html code to inject into the html file.
 * @param options Optional injection options
 * @param callback
 */
export function injectFaviconMarkups(
  htmlFile: string,
  htmlCode: string | string[],
  options?: {
    /** Any extra html code to add. */
    add?: string | string[]
    /** Any extra html tag patterns to remove */
    remove?: string | string[]
    /** If there are any patterns that might be removed (by default or
     * otherwise) they can be *un-removed* by being specified here.
     */
    keep?: string | string[]
  }
): Promise<string>
export function injectFaviconMarkups(
  htmlFile: string,
  htmlCode: string | string[],
  options: {
    /** Any extra html code to add. */
    add?: string | string[]
    /** Any extra html tag patterns to remove */
    remove?: string | string[]
    /** If there are any patterns that might be removed (by default or
     * otherwise) they can be *un-removed* by being specified here.
     */
    keep?: string | string[]
  },
  callback: (err: Error, result: string) => void
): Promise<void>
export async function injectFaviconMarkups(
  htmlFile: string,
  htmlCode: string | string[],
  options?: {
    /** Any extra html code to add. */
    add?: string | string[]
    /** Any extra html tag patterns to remove */
    remove?: string | string[]
    /** If there are any patterns that might be removed (by default or
     * otherwise) they can be *un-removed* by being specified here.
     */
    keep?: string | string[]
  },
  callback?: (err: Error, result: string) => void
): Promise<string | void> {
  const defaultRemove = [
    'link[rel="mask-icon"]',
    'link[rel="shortcut icon"]',
    'link[rel="icon"]',
    'link[rel^="apple-touch-icon"]',
    'link[rel="manifest"]',
    'link[rel="yandex-tableau-widget"]',
    'meta[name^="msapplication"]',
    'meta[name="mobile-web-app-capable"]',
    'meta[name="theme-color"]',
    'meta[property="og:image"]'
  ]

  const add = typeof htmlCode === 'string' ? [htmlCode] : htmlCode
  const remove = defaultRemove

  if (options) {
    if (options.add) {
      // if there are any extra tags to add to the html we want to add them to
      // the add array.
      if (typeof options.add === 'string') {
        add.push(options.add)
      } else {
        add.push(...options.add)
      }
    }
    if (options.remove) {
      // if there are any extra tags to remove from the html we want to add them
      // to the remove array.
      if (typeof options.remove === 'string') {
        remove.push(options.remove)
      } else {
        remove.push(...options.remove)
      }
    }
    if (options.keep) {
      /**
       * Removes all occurrences of a pattern from the remove array.
       * This effectively *un-removes* the pattern.
       *
       * @param pattern An html pattern
       */
      const unremovePattern = (pattern: string): void => {
        let idx
        // while the pattern is still in the array, remove it.
        while ((idx = remove.indexOf(pattern)) >= 0) {
          remove.splice(idx, 1)
        }
      }

      if (typeof options.keep === 'string') {
        unremovePattern(options.keep)
      } else {
        options.keep.forEach(unremovePattern)
      }
    }
  }

  // these options are the same regardless of the callback situation.
  const metaparserOptions = {
    data: htmlFile,
    add,
    remove
  }

  if (callback) {
    // if there is a callback, handle it the old way.
    metaparser({
      ...metaparserOptions,
      callback
    })
  } else {
    // otherwise botch an async implementation of the metaparser.
    return await new Promise((resolve, reject) => {
      metaparser({
        ...metaparserOptions,
        callback: (err: Error, html: string) => {
          if (err) reject(err)
          else resolve(html)
        }
      })
    })
  }
}
