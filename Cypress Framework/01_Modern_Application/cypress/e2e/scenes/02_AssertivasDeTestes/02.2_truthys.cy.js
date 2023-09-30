/// <reference types="cypress" /> 

    it("Truthy", () =>
    {
        const a = true;
        const b = false;
        let c;
        let d = null;
        expect(a).to.be.true;
        expect(true).to.be.true;
        expect(b).to.be.false;
        expect(false).to.be.false;
        expect(c).to.be.undefined;
        expect(d).to.be.null;
    });