describe('Rockets', () => {
    describe('Given a user on the rockets page', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Then it should display rockets in tables', () => {
            cy.findAllByTestId('rockets-table-row').should('have.length.greaterThan', 0)
        })

        it('Then it should display rocket name in table', () => {
            cy.findAllByTestId('rockets-table-name').first().should('not.be.empty')
        })

        describe('When a preview image is clicked', () => {
            let imageSrc: string
            
            beforeEach(() => {
                cy.findAllByTestId('rockets-table-preview-image').first().then((element) => {
                    imageSrc = element.attr('src')
                }).click()
            })

            it('Then the image should be displayed in a dialog', () => {
                cy.findByTestId('rockets-dialog-image').should('have.attr', 'src', imageSrc)
            })
        })

        describe('When a details link is clicked', () => {
            let rocketLink: string

            beforeEach(() => {
                cy.findAllByTestId('rockets-table-details-link').first().then((element) => {
                    rocketLink = element.attr('href')
                }).click()
            })

            it('Then we should navigate to the single rocket page', () => {
                cy.url().should('eq', Cypress.config().baseUrl + rocketLink)
            })
        })
    })
})