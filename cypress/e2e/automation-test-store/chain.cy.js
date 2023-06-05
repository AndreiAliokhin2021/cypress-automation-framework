describe('Chain', () => {
    it('Chain test', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeaderText) => {
            console.log('Selected the following item: ' + itemHeaderText.text())
        })
        it('Challenge',()=>{

        })

    })
})
