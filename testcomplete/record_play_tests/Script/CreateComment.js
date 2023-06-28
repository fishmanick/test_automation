function Test1()
{
  Browsers.Item(btChrome).Navigate("http://127.0.0.1:7000/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageHomeUniverse;
  let image = page.headerNewPost.navNewPost.link.imageUniverse;
  image.Click();
  page.Wait();
  page.link12.Click();
  page.Wait();
  page.link2.Click();
  page.Wait();
  page.linkReadMore2.Click();
  page.Wait();
  let form = page.formNickChuhai;
  let textarea = form.textareaDescription;
  textarea.Click();
  textarea.Keys("Comment_2");
  form.buttonSend.ClickButton();
  page.Wait();
  image.Click();
}