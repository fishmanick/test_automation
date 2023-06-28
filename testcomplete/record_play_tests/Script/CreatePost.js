function Test1()
{
  Browsers.Item(btChrome).Navigate("http://127.0.0.1:7000/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageHomeUniverse;
  page.headerNewPost.navNewPost.textnodeNewPost.linkNewPost.Click();
  let page2 = browser.pageCreate;
  page2.Wait();
  let form = page2.formCancel;
  let textNode = form.textnode;
  textNode.Click();
  textNode.Keys("Post_2");
  textNode = form.textnode2;
  textNode.Click();
  textNode.Keys("POst[BS][BS][BS]ot[BS]st body");
  form.buttonPost.ClickButton();
  page.Wait();
  page.buttonOk.ClickButton();
}