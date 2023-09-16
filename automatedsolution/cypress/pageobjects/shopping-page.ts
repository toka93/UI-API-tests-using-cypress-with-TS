export class shopping {

 

    elements = {
        logoutButton: () => cy.get('a[href="/logout"]'),
        countinueButton: () => cy.get('[data-qa="continue-button"]'),
        products: ()=>cy.get('.features_items .single-products'),
        brandsCount:()=>cy.get('a[href*="/brand_products"] span'),
        productsButton: () => cy.get('a[href="/products"]'),
      };


      ValidateUserLoggedIn()
      { return this.elements.logoutButton().should('exist');
    }
    validateProductsCount()
    {
      return this.elements.products().should('have.length', 34);
    }
    validateBrandsCount()
    {
      let total:number=0;
      this.elements.brandsCount()
      .each(($el, index, $lis) => {
       
        let str=cy.wrap($el).invoke('text').toString();

        const numberStr: string = str.replace(/\D/g, ''); // Removes non-digit characters
        const number: number = parseInt(numberStr);
        total= total+number;

    })
    return total==34;
}

gotoProductsPage()
{

this.elements.productsButton().click();


}

}
export const ShoppingPage=new shopping();