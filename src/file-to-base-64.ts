import { Base64String } from './types/master-picture'
import * as fs from 'fs'

/**
 * Reads a file and asynchronously and returns the base64 representation of the
 * file's data.
 *
 * @param filePath The path to the file to read.
 * @param callback A callback function to handle the result. ***deprecated***
 */
export function fileToBase64(filePath: string): Promise<Base64String>
export function fileToBase64(
  filePath: string,
  callback: (err?: Error, result?: Base64String) => void
): Promise<void>
export async function fileToBase64(
  filePath: string,
  callback?: (err?: Error, result?: Base64String) => void
): Promise<Base64String | void> {
  let base64string: Base64String
  try {
    base64string = fs.readFileSync(filePath).toString('base64')

    if (callback) callback(undefined, base64string)
    return base64string
  } catch (err) {
    if (callback) {
      // if the user provided a callback we dont want to throw the error outside
      callback(err)
      return
    } else {
      // With no callback they can handle it like a normal async error.
      throw err
    }
  }
}

export function fileToBase64Sync(filePath: string): Base64String {
  return fs.readFileSync(filePath).toString('base64')
}