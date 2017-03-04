import { CardapioPage } from './app.po';

describe('cardapio App', () => {
  let page: CardapioPage;

  beforeEach(() => {
    page = new CardapioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
