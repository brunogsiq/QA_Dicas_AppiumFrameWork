/// <reference types="cypress" /> 

it("Types", () => {
    const num = 1;
    const str = "string";
  
    expect(num).to.be.a("number");
    expect(str).to.be.a("string");
    expect({}).to.be.an("object");
    expect([]).to.be.an("array");
  });
  
  it("String", () => {
    const str = "String de 1 teste";
  
    expect(str).to.be.equal("String de 1 teste");
    expect(str).to.have.length(17);
    expect(str).to.contains("de");
    expect(str).to.match(/ing d/);
    expect(str).to.match(/^String/); // para verificar se iniciliza com a palavra
    expect(str).to.match(/teste$/); // para verificar se finaliza com a palavra
    expect(str).to.match(/\w+/); // para verificar se possui apenas letrar, 1 ou  mais
    expect(str).to.match(/\D+/); // para verificar se possui o número
  });
  
  it("Numbers", () => {
    const intNum1 = 1910;
    const floatNum2 = 1.0953;
  
    expect(intNum1).to.be.equal(1910);
    expect(floatNum2).to.be.eq(1.0953);
    expect(intNum1).to.be.above(1900);
    expect(floatNum2).to.be.above(1.0);
    expect(intNum1).to.be.below(1915);
    expect(floatNum2).to.be.below(1.19);
    expect(floatNum2).to.be.closeTo(1.0, 0.1);
  });
  