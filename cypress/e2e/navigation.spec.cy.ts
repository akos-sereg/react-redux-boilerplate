import { PageMap } from '../page-map'

describe('navigate between pages', () => {
    it('opens Home page by default', () => {
        cy.visit('http://localhost:3000')
        cy.get(PageMap.home.container).should('contain', 'Main')
    })

    it('opens About page', () => {
        cy.visit('http://localhost:3000/#/about')
        cy.get(PageMap.about.title).should('contain', 'About')
    })

    it('opens Authors page', () => {
        cy.visit('http://localhost:3000/#/authors')
        cy.get(PageMap.authors.title).should('contain', 'Authors')
    })
})