export class Account {

 

    elements = {
        passwordTextField: () => cy.get('[data-qa="password"]'),
        firstNameTextField: () => cy.get('[data-qa="first_name"]'),
        lastNameTextField: () => cy.get('[data-qa="last_name"]'),
        addressTextField: () => cy.get('[data-qa="address"]'),
        countryDDL : () =>cy.get('[data-qa="country"]'),
        stateTextField: () => cy.get('[data-qa="state"]'),
        cityTextField: () => cy.get('[data-qa="city"]'),
        zipCodeTextField: () => cy.get('form > :nth-child(19)'),
        mobileTextField: () => cy.get('[data-qa="mobile_number"]'),
        createAccountButton: () => cy.get('[data-qa="create-account"]')

      };


      enterPassword(password:string) {
        this.elements.passwordTextField().type(password);
      }
      enterFirstName(firstname:string) {
        this.elements.firstNameTextField().type(firstname);
      }
      enterLastname(lastname:string) {
        this.elements.lastNameTextField().type(lastname);
      }
      enterAddress(address:string) {
        this.elements.addressTextField().type(address);
      }
      enterState(state:string) {
        this.elements.stateTextField().type(state);
      }
      enterCity(city:string) {
        this.elements.cityTextField().type(city);
      }
      enterZipCode(zip:string) {
        this.elements.zipCodeTextField().type(zip);
      }
      enterMobile(mobile:string) {
        this.elements.mobileTextField().type(mobile);
      }
      clickOnCreateAccount() {
        this.elements.createAccountButton().click();
      }
      selectCountry(country:string) {
        this.elements.countryDDL().select(country);
      }


  enterAccountDetails(password:string,firstname:string,lastname:string,address:string
    ,state:string,city:string,zip:string,mobile:string)
{
  this.enterPassword(password);
  this.enterFirstName(firstname);
  this.enterLastname(lastname);
  this.enterAddress(address);
 // this.selectCountry(country);
  this.enterState(state);
  this.enterCity(city);
  this.enterZipCode(zip);
  this.enterMobile(mobile);
  this.clickOnCreateAccount();





}



     
}
export const AccountPage=new Account();