/*
  Interceptando a chamada Post
  cy.intercept('POST', '**/*').as('blockPOST')
  cy.intercept('GET', '**/*').as('blockGET')

cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(202)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(202)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(203)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(203)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(204)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(204)
    })

*/

/*
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(202)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(202)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(203)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(203)
    })
    cy.wait('@blockGET').then((interception) => {
      expect(interception.response.statusCode).to.eq(204)
    })
    cy.wait('@blockPOST').then((interception) => {
      expect(interception.response.statusCode).to.eq(204)
    })
*/