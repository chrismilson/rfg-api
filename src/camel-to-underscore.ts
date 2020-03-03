/**
 * These keys are part of special cases.
 * This is a BADLY written rest api and I can't change it.
 */
const KEYS_TO_IGNORE = [
  'scaling_algorithm',
  'name',
  'content',
  'param_name',
  'param_value',
  'description',
  'app_description',
  'developer_name',
  'app_name',
  'existing_manifest'
]

/**
 * Replaces a string in camel case with one in underscore or snake case.
 *
 * @param str The string to transform
 */
export function camelCaseToUnderscore(str: string): string {
  return str.replace(
    // matches all capital letters preceeded by a non-period character.
    /([^.])([A-Z])/g,
    (_match, preceedingLetter, capitalLetter) => {
      return preceedingLetter + '_' + capitalLetter.toLowerCase()
    }
  )
}

/**
 * When given an object, be it a string, an array, or a hash, will recursively
 * convert the object itself, the values of the object, and then keys of they
 * object into snake case where applicable.
 *
 * @param request The object to convert into snake case.
 */
export function camelCaseToUnderscoreRequest<T>(request: Array<T>): Array<T>
export function camelCaseToUnderscoreRequest(request: string): string
export function camelCaseToUnderscoreRequest(request) {
  if (!request) return

  if (request instanceof Array) {
    return request.map(v => camelCaseToUnderscoreRequest(v))
  } else if (typeof request === 'string') {
    return camelCaseToUnderscore(request)
  } else if (request instanceof Object) {
    const result = {}
    Object.keys(request).forEach(camelKey => {
      const snakeKey = camelCaseToUnderscore(camelKey)
      const snakeContent = camelCaseToUnderscoreRequest(request[camelKey])
      result[snakeKey in KEYS_TO_IGNORE ? camelKey : snakeKey] = snakeContent
    })
    return result
  }
}
