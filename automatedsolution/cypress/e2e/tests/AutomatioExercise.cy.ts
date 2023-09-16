import { HomePage } from "../../pageobjects/home-page";
import { SignupPage } from "../../pageobjects/signup-page";
import { AccountPage } from "../../pageobjects/account-page";
import { AccountCreatedPage } from "../../pageobjects/accountcreated-page";
import {ShoppingPage} from "../../pageobjects/shopping-page";
import {ProductPage} from "../../pageobjects/products-page";
import { faker } from '@faker-js/faker'

describe('Automation UI Task', () => {
  

  beforeEach(() => {
   
    // from your cypress/e2e/spec.cy.ts
    cy.visit(Cypress.env("webUrl"));
    cy.viewport(1280, 720)
    });
  

   
   
      it('Verify User Creation and Products Available', function() {
        HomePage.openSignupPage();
        SignupPage.signUp(faker.person.fullName(),faker.internet.email());
        AccountPage.enterAccountDetails(faker.internet.password(),faker.person.firstName(),
        faker.person.lastName(),faker.location.streetAddress(),faker.location.state(),faker.location.city(),
        faker.location.zipCode(),faker.phone.number());
        AccountCreatedPage.ValidateAccountCreated();
        AccountCreatedPage.clickOnContinue();
        ShoppingPage.ValidateUserLoggedIn();
        ShoppingPage.validateProductsCount();
        ShoppingPage.validateBrandsCount();
        ProductPage.showWomenDresses();
        ProductPage.getDressTitles();
       })

    
     
      
   });