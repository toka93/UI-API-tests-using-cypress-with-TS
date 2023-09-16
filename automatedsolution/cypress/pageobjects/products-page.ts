export class Products {



  elements = {
    womenexpandButton: () => cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'),
    dressButton: () => cy.get('a[href="/category_products/1"]'),
    dessTitles: () => cy.get('div.productinfo>p')
  };


  showWomenDresses() {
    this.elements.womenexpandButton().click();
    this.elements.dressButton().click();

  }

  getDressTitles() {

    const elements = this.elements.dessTitles();
    const textArray = [];

    elements.each(($el, index) => {
      const text = $el.text();
      textArray.push(text);
    });

    const fileName = '/fixtures/results.txt';
    cy.writeFile(fileName, textArray.join('\n'));
    cy.log(textArray.join('\n'))

  }



}
export const ProductPage = new Products();