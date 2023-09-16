export class Signup {

 

    elements = {
        nameTextField: () => cy.get('[data-qa="signup-name"]'),
        emailTextField: () => cy.get('[data-qa="signup-email"]'),
        signUpButton: () => cy.get('[data-qa="signup-button"]'),
        
        
      };


      enterName(name:string) {
        this.elements.nameTextField().type(name);
      }
      enterEmail(email:string) {
        this.elements.emailTextField().type(email);
      }
      clickOnSignUP() {
        this.elements.signUpButton().click();
      }

      signUp(name:string,email:string){
        this.enterName(name);
        this.enterEmail(email);
        this.clickOnSignUP();

      }
}
export const SignupPage=new Signup();