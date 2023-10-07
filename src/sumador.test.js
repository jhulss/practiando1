import maquinaCambio from "./sumador.js";


describe("Cambiar monto", () => {
  it("deberia poder ingresa el monto de venta", () => {
    const calcu = new maquinaCambio;
    expect(calcu.calcularCambio(3)).toEqual(3);
  });

  it("deberia poder ingresa el efectivo entregado por el cliente", () => {
    const calcu = new maquinaCambio;
    expect(calcu.calcularCambio(5)).toEqual(5);
  });

  

});
