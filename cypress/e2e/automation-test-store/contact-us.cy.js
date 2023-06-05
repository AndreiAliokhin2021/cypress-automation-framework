describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via Contact Us form", () => {
        cy.visit('https://automationteststore.com/')
        cy.title().should('include','A place to practice your automation skills!')
        cy.xpath('//a[text()="Contact Us"]').click()
        cy.url().should('include','contact')
        cy.get('#ContactUsFrm_first_name').type('Andrei')
        cy.get('#ContactUsFrm_email').type('testmail@test.test')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('This is Test Message')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should("have.text", 'Your enquiry has been successfully sent to the store owner!')
    })
});




