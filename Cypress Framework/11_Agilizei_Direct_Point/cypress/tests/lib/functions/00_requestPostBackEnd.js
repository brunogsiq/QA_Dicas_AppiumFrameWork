import { dateInicial } from "../dates/_dates";

export function backendPost() {
  const dateInicial = {};
  //requisição backend pelo vscode_cypress
  cy.request({
    //Tipo de requisição utilizada
    method: "post",
    //url de acesso
    url: "https://",
    //const - em dates
    body: dateInicial,
    failOnStatusCode: false,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);

    let urlPadrao = response.body.url;
    cy.log(urlPadrao);
    cy.wrap(urlPadrao).as("urlPadrao");
  });
  cy.get("@urlPadrao").then((urlPadrao) => {
    cy.log(urlPadrao);
    cy.visit(urlPadrao);
  });
}
