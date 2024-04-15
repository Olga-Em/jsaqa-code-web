beforeEach ( () => {
    cy.visit("/");
})

it("Should open the main page", () => {
    cy.contains('Books list');
})

it("Should successfully login", () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
})

it("Should not login with empty login", () => {
    cy.login(" ", "123")
    cy.get("#mail").then( (elements) => {
        expect(elements[0].checkValidity()).to.be.false
        expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
})

it("Should not login with empty password", () => {
    cy.login("bropet@mail.ru", " ")
    cy.get("#pass").then( (elements) => {
        expect(elements[0].checkValidity()).to.be.true
    })
})

describe("test add books", () => {

    beforeEach(() => {
      cy.login(Cypress.env('login'), Cypress.env('password'))
    });

    it("Should appear in favorites", () => {
        cy.contains("Add to favorite").click()
        cy.contains("Favorites").click()
        cy.get('.card-body').should("be.visible")
    })

    it("Should delete book from favorite", () => {
        cy.contains("Favorites").click()
        cy.contains("Delete from favorite").click()
        cy.contains("Please add some book to favorit on home page!").should("be.visible")
    })

    it("Should download the book", () => {
        cy.contains("Гордость и предубеждение").click()
        cy.contains("Dowload book").should("be.visible")
    })    
})