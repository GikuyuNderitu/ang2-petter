import { PetterPage } from './app.po';

describe('petter App', () => {
  let page: PetterPage;

  beforeEach(() => {
    page = new PetterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
