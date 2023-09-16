export class Home {

 

    elements = {
        signUpLoginButton: () => cy.get('a[href="/login"]')
      };


      openSignupPage() {
        this.elements.signUpLoginButton().click();
      }
     
}
export const HomePage=new Home();