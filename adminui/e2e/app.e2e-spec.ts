import { AdminuiPage } from './app.po';

describe('adminui App', () => {
  let page: AdminuiPage;

  beforeEach(() => {
    page = new AdminuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
