export class AccountCreated {

 

    elements = {
        accountCreatedLabel: () => cy.get('b'),
        countinueButton: () => cy.get('[data-qa="continue-button"]')
      };


      ValidateAccountCreated()
      { return this.elements.accountCreatedLabel().should('have.text','Account Created!');}
      clickOnContinue() {
        this.elements.countinueButton().click();
      }
}
export const AccountCreatedPage=new AccountCreated();