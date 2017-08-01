import { MyFilePage } from './app.po';

describe('my-file App', () => {
  let page: MyFilePage;

  beforeEach(() => {
    page = new MyFilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
