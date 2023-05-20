/// <reference types="cypress"/>

import { validateAccessOUC } from "../lib/functions/03_validateAcessOUC";

describe('Validar acesso a tela Onde usar meu cartão', () => {
   it("03 - Validar acesso a tela Onde usar meu cartão", () => {
    validateAccessOUC()
   })
})
