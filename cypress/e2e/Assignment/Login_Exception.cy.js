describe('OrangeHRM Login Test', () => {
  
    it('TC 03 Logs in with empty credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get("[name = 'username']").type('');
     cy.get("[name = 'password']").type('');
      cy.get("button[type='submit']").click();
     cy.get('img[alt="client brand banner"]')
      .should('be.visible')
      .log('Enter the credentials');
    });
    
  });