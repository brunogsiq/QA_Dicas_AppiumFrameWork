/// <reference types="cypress" /> 

    it("Types", () =>
    {
        const num = 1;
        const str = "string";

        expect(num).to.be.a("number");
        expect(str).to.be.a("string");
        expect({}).to.be.an("object");
        expect([]).to.be.an("array");
    });

    it("String", () =>
    {
      const str = "String de 1 teste";
      const str02 = "SCCP 1910";
      const str03 = 1;

      expect(str).to.be.equal("String de 1 teste");
      expect(str).to.have.length(17);
      expect(str).to.contains("de 1");
      expect(str).to.match(/ing d/);
      // para verificar se iniciliza com a palavra.
      expect(str).to.match(/^String/);
      // para verificar se finaliza com a palavra.
      expect(str).to.match(/teste$/);
      // para verificar se possui apenas letras, uma ou mais letras.
      expect(str).to.match(/\w+/);
      // para verificar que não possui números.
      expect(str02).to.match(/\D+/);
      /*
      Este teste irá falhar já que str03 possui valor inteiro, ou seja, número.
      expect(str03).to.match(/\D+/);
      */
    });

    it("Numbers", () =>
    {
        const intNum1 = 1910;
        const floatNum2 = 1.0953;

        expect(intNum1).to.be.equal(1910);
        expect(floatNum2).to.be.eq(1.0953);
        //Verifica se o valor é acima.
        expect(intNum1).to.be.above(1900);
        expect(floatNum2).to.be.above(1.0);
        //Verifica se o valor é abaixo.
        expect(intNum1).to.be.below(1915);
        expect(floatNum2).to.be.below(1.19);
        //Verfica a proximidade entre valores, com uma casa após a vírgula.
        expect(floatNum2).to.be.closeTo(1.0, 0.11);
    });