import DesktopBrowserFaviconDesign from './desktop-browser'
import IOSFaviconDesign from './ios'
import WindowsFaviconDesign from './windows'
import FirefoxAppFaviconDesign from './firefox-app'
import AndroidChromeFaviconDesign from './android-chrome'
import SafariPinnedTabFaviconDesign from './safari-pinned-tab'

interface FaviconDesigns {
  desktop_browser?: DesktopBrowserFaviconDesign
  ios?: IOSFaviconDesign
  windows?: WindowsFaviconDesign
  firefox_app?: FirefoxAppFaviconDesign
  android_chrome?: AndroidChromeFaviconDesign
  safari_pinned_tab?: SafariPinnedTabFaviconDesign
}

export default FaviconDesigns