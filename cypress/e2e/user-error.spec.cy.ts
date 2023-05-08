import { WEBAPP_URL_ROOT } from '../constants';
import { PageMap } from '../page-map'

describe('User Error Handling', () => {

    const navigateToCreateAuthor = () => {
        cy.visit(`${WEBAPP_URL_ROOT}/#/authors`)
        cy.get(PageMap.authors.addAuthorButton).click()
        cy.url().should('eq', `${WEBAPP_URL_ROOT}/#/author`)
    }

    const navigateToUpdateAuthor = () => {
        cy.visit(`${WEBAPP_URL_ROOT}/#/authors`)
        cy.get(PageMap.authors.authorList.ids).should('have.length', 3)
        cy.get(PageMap.authors.authorList.ids).first().click()
        cy.url().should('eq', `${WEBAPP_URL_ROOT}/#/author/cory-house`)
    }

    const verifyThatAuthorListDidNotChange = () => {
        cy.visit(`${WEBAPP_URL_ROOT}/#/authors`)
        cy.get(PageMap.authors.authorList.ids).should('have.length', 3)
    }

    it('detects empty first name upon creation', () => {
        navigateToCreateAuthor()

        // populate form
        cy.get(PageMap.authors.authorForm.firstNameText).type('Paul')

        // act: save
        cy.get(PageMap.authors.authorForm.saveButton).click()

        // assert
        cy.get(PageMap.authors.authorForm.textInputError).contains('Last Name must not be empty')
        cy.get(PageMap.authors.authorForm.textInputError).should('not.contain', 'First Name must not be empty')

        verifyThatAuthorListDidNotChange()
    })

    it('detects empty last name upon creation', () => {
        navigateToCreateAuthor()

        // populate form
        cy.get(PageMap.authors.authorForm.lastNameText).type('MaudDib')

        // act: save
        cy.get(PageMap.authors.authorForm.saveButton).click()

        // assert
        cy.get(PageMap.authors.authorForm.textInputError).contains('First Name must not be empty')
        cy.get(PageMap.authors.authorForm.textInputError).should('not.contain', 'Last Name must not be empty')

        verifyThatAuthorListDidNotChange()
    })

    it('detects empty first name and last name upon creation', () => {
        navigateToCreateAuthor()

        // act: save
        cy.get(PageMap.authors.authorForm.saveButton).click()

        // assert
        cy.get(PageMap.authors.authorForm.textInputError).contains('First Name must not be empty')
        cy.get(PageMap.authors.authorForm.textInputError).contains('Last Name must not be empty')

        verifyThatAuthorListDidNotChange()
    })

    it('detects empty first name upon update', () => {
        navigateToUpdateAuthor()

        cy.get(PageMap.authors.authorForm.firstNameText).type(' the Greatest')
        cy.get(PageMap.authors.authorForm.lastNameText).clear()

        cy.get(PageMap.authors.authorForm.saveButton).click()
        cy.get(PageMap.authors.authorForm.textInputError).should('not.contain', 'First Name must not be empty')
        cy.get(PageMap.authors.authorForm.textInputError).contains('Last Name must not be empty')

        verifyThatAuthorListDidNotChange()
    })

    it('detects empty last name upon update', () => {
        navigateToUpdateAuthor()

        cy.get(PageMap.authors.authorForm.firstNameText).clear()
        cy.get(PageMap.authors.authorForm.lastNameText).type('ehlo')

        cy.get(PageMap.authors.authorForm.saveButton).click()
        cy.get(PageMap.authors.authorForm.textInputError).contains('First Name must not be empty')
        cy.get(PageMap.authors.authorForm.textInputError).should('not.contain', 'Last Name must not be empty')

        verifyThatAuthorListDidNotChange()
    })
})