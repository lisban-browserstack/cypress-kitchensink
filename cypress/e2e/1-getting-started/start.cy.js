describe("BStack Demo Automation", () => {
    it("Verify Purchase Process", () => {
      cy.visit("https://bstackdemo.com/");
      cy.contains('Sign In').click();
      cy.contains('Select Username').should('be.visible').click();
      cy.get('#react-select-2-input').type('fav_user\n')
      cy.contains('Select Password').click();
      cy.get('#react-select-3-input').type('testingisfun99\n');
      cy.get('#login-btn').click()
      cy.xpath("//*[@id='1']/div[4]").should('be.visible').click();
      cy.contains('Checkout').should('be.visible').click()
      cy.get('#firstNameInput').should('be.visible').click().type('Varad')
      cy.get('#lastNameInput').type('Prabhu')
      cy.get('#addressLine1Input').type('Dadar')
      cy.get('#provinceInput').type('Maharashtra')
      cy.get('#postCodeInput').type('400028')
      cy.get('#checkout-shipping-continue').click()
      cy.get('#confirmation-message').should('have.text', 'Your Order has been successfully placed.')
      cy.end()
    });
  });