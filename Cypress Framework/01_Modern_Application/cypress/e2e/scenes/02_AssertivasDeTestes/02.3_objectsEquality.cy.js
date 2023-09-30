/// <reference types="cypress" /> 

    it("Object Equality", () => {
        //Construindo um objeto em java script. que deverá possuir a sintaxe abaixo:
        const obj =
        {
          //Propriedade: Valor
          a: 1,
          b: 2,
        };

        expect(obj).equal(obj);
        expect(obj).equals(obj);
        expect(obj).eq(obj);
        //Caso não utilize o deep, como abaixo, apresentará erro.
        expect(obj).to.be.deep.equal({ a: 1, b: 2 });
        expect(obj).eql({ a: 1, b: 2 });
        expect(obj).include({ a: 1, b: 2 });
        expect(obj).not.to.be.include({ c: 3, d: 4 });
        expect(obj).not.to.have.property("f");
        expect(obj).to.have.property("b");
        expect(obj).to.have.property("b", 2);
        expect(obj).to.not.be.empty;
        expect({}).to.be.empty;
    })