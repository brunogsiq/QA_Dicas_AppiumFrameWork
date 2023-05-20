/// <reference types="cypress"/>

import { validateSearch } from "../lib/functions/04_validateSearch";

describe('Validar acesso a tela de buscas pelo mapa', () => {
   it("04 - Validar acesso a tela de buscas pelo mapa", () => {
      validateSearch()
   })
})
