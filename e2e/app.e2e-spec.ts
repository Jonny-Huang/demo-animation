import { DemoAnimationPage } from './app.po';

describe('demo-animation App', () => {
  let page: DemoAnimationPage;

  beforeEach(() => {
    page = new DemoAnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
