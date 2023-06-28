function Test1()
{
  Browsers.Item(btChrome).Navigate("http://127.0.0.1:7000/posts/10");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.page10.headerNewPost.navNewPost.link.imageUniverse.Click();
  let page = browser.pageHomeUniverse;
  page.Wait();
  page.headerNewPost.navNewPost.textnodeSignOut.buttonSignOut.ClickButton();
}