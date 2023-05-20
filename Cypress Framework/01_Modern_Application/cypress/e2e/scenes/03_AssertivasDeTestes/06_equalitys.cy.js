///<reference types="cypress"/>


//Caso de teste esperando resultado de ok
it("Equality", () => {
  const a = 1;
  expect(a).equal(1);
})

//Caso de teste esperando falha no resultado
it("Equality Error", () => {
  const b = 1;
  expect(b, "deveria ser o valor").equal(1);
})

//Caso de teste esperando resultado de ok
it("Equality Error", () => {
  const c = 1;
  expect(c).to.be.equal(1);
})

//Caso de teste esperando resultado de ok
it("Equality Error", () => {
  const d = 1;
  const e = 2;
  expect(d).not.to.be.equal(e);
})