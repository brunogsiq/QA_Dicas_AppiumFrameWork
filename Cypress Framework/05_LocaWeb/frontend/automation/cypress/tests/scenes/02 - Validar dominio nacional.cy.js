/// <reference types="cypress" />

import { visit_With_Cookie } from "../lib/functions/_cypress";
import { validate_Alerts, validate_Domains_Br } from "../lib/functions/02_validate_Domains_Br";

describe("02 - Validação de domínio nacional", () => {
  beforeEach(() => {
    visit_With_Cookie();
  });
  //Caso de teste, onde realizo a chamada da funçao com meus steps
  it("02_1 - Validar domínio nacional inválido - vazio", () => {
    var testData = {
      domain: ' ',
    };
    validate_Domains_Br(testData);
    validate_Alerts(testData);
  });
  it('02_2 - Validar domínio nacional inválido - caracteres especiais', () => {
    var testData = {
      domain: '!@#$%',
    };
    validate_Domains_Br(testData);
    validate_Alerts(testData);
  });

  it('02_3 - Validar domínio nacional inválido - caracteres númericos', () => {
    var testData = {
      domain: '123456',
    };
    validate_Domains_Br(testData);
    validate_Alerts(testData);
  });

  it('02_4 - Validar domínio nacional válido - existente', () => {
    var testData = {
      domain: 'teste',
    };
    validate_Domains_Br(testData);
    validate_Alerts(testData);
  });

  it('02_5 - Validar domínio nacional válido - inexistente', () => {
    var testData = {
      domain: 'testevalido',
    };
    validate_Domains_Br(testData);
    validate_Alerts(testData);
  });
});