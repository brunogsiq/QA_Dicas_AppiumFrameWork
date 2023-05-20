/// <reference types="cypress"/>

import { validateUrl, validateAcceptTerms } from "../lib/functions/01_validAccessUrl";

describe('Validar acesso tela home page e aceite dos termos de privacidade (Cookies)', () => {
   it("01 - Validar acesso a home page", () => {
      validateUrl()
      validateAcceptTerms()
   });
});
