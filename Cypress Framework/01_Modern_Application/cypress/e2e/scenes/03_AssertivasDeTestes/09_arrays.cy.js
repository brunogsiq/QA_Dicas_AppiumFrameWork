/// <reference types="cypress" /> 

it("Arrays", () => {
    const arr = [1, 2, 3];
  
    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.have.include.members([1, 3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
  });
  