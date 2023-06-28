function Test1()
{
  Browsers.Item(btChrome).Navigate("http://127.0.0.1:7000/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageHomeUniverse.headerSignIn.navSignIn.textnodeSignIn.linkSignIn.Click();
  let page = browser.pageSignIn;
  page.Wait();
  page.formSignIn.buttonSignIn.ClickButton();
}