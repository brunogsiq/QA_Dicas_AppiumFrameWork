/// <reference types="cypress" /> 

it("Object Equality", () => {
    //Construindo um objeto em java script
    const obj = {
      a: 1,
      b: 2,
    };
  
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.deep.equal({ a: 1, b: 2 });
    expect(obj).eql({ a: 1, b: 2 });
    expect(obj).to.have.property("b");
    expect(obj).to.have.property("b", 2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
  })