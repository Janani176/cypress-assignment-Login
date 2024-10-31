
describe('OrangeHRM Login Test', () => {
  
    it('TC 02 Logs in with invalid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get("[name = 'username']").type('Admin123');
     cy.get("[name = 'password']").type('admin');
      cy.get("button[type='login']").click();
     cy.get('img[alt="client brand banner"]')
      .should('be.visible')
      .log('Login to the application is unsuccessful');
    });
    
  });