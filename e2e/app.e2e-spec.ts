import { BreezeExamplePage } from './app.po';

describe('breeze-example App', function() {
  let page: BreezeExamplePage;

  beforeEach(() => {
    page = new BreezeExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
