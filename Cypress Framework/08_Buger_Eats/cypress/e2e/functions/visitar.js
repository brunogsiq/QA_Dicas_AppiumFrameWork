export function visitarHome()
{
    cy.visit("https://buger-eats.vercel.app/");

    cy.get("main > h1")
        .should("be.visible")
}

export function visitarCadastre_se()
{
    visitarHome();

    cy.get("main > a")
        .click();

    cy.get("form > h1")
        .should("be.visible");
}