
describe('OrangeHRM Login Test', () => {
  
    it('TC01 Logs in with valid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get("[name = 'username']").type('Admin');
     cy.get("[name = 'password']").type('admin123');
      cy.get("button[type='submit']").click();
     cy.get('img[alt="client brand banner"]')
      .should('be.visible')
      .log('Login to the application is successful');
    });
    
  });