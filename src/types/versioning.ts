/**
 * When a browser loads a favicon for the first time, it tends to cache it and
 * to never load it again. When your web site is not new and you want to
 * update your favicon, that can be a problem: your loyal visitors won't
 * notice the change. A workaround is to append a version to the favicon URLs
 * as a query parameter. This setion lets you do just that.
 *
 * When this section is absent or set to false (ie. versioning: false), the
 * favicon files are not versioned. When this section is set to true (ie.
 * versioning: true), versioning is generated. The query parameter name is v
 * and the value is a hashed timestamp.
 */
type Versioning = boolean

export default Versioning
