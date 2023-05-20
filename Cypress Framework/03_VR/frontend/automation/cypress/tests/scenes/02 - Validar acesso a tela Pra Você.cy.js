/// <reference types="cypress"/>

import { validateAccessPV } from "../lib/functions/02_validateAcessPV"

describe('Validar acesso a tela Pra Você', () => {
   it("02 - Validar acesso a tela Pra Você", () => {
      validateAccessPV()
   })
})
