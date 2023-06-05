describe("Test Contact Us form via WebdriverUniversity", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Andrei')
        cy.get('[name="last_name"]').type('Aliokhin')
        cy.get('[name="email"]').type('Gair1970@gustr.com')
        cy.get('textarea.feedback-input').type('This is test content')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it("Should not be able to submit a successful submission via Contact Us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Andrei')
        cy.get('[name="last_name"]').type('Aliokhin')
        cy.get('textarea.feedback-input').type('This is test content')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are')
    })

    it("Should not be able to submit a successful submission via Contact Us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset')
        cy.get('[name="first_name"]').type('Andrei')
        cy.get('[name="last_name"]').type('Aliokhin')
        cy.get('textarea.feedback-input').type('This is test content')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are')
    })
});




