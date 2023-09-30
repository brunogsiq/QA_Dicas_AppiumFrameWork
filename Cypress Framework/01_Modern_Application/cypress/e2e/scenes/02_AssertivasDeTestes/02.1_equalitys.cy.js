///<reference types="cypress"/>

    //Caso de teste esperando resultado de ok
    it("Equality_01", () =>
    {
        const a = 1;
        expect(a).equal(1);
    })

    //Caso de teste esperando falha no resultado
    // it("Equality Error_01", () =>
    // {
    //     const b = 1;
    //     expect(b, "deveria ser o valor 1").equal(2);
    // })

    //Caso de teste esperando resultado de ok
    it("Equality_02", () =>
    {
        const c = 1;
        expect(c).to.be.equal(1);
    })

    //Caso de teste esperando resultado de ok
    it("Equality_03", () =>
    {
        const d = 1;
        const e = 2;
        expect(d).not.to.be.equal(e);
    })

    //Caso de teste esperando falha no resultado
    // it("Equality Error_02", () =>
    // {
    //     expect(a)to.be.equal(n);
    // })

    //Caso de teste esperando resultado ok
    it("Equality_04", () =>
    {
        expect("a").not.to.be.equal("n");
    })