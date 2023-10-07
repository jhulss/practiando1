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

  it("deberia poder ingresa y devolver el monto de venta y el efectivo", () => {
    const calcu = new maquinaCambio;
    expect(calcu.verificarMontoEfectivo(20, 30)).toEqual([20, 30]);
  });

  it("deberia poder mostrar un mensaje de error si no se ingresa el monto de venta", () => {
    const calcu = new maquinaCambio;
    expect(calcu.verificarMontoEfectivo(null, 30)).toEqual("Error de cantidad, ingrese el y/o datos faltantes");
  });

  it("deberia poder mostrar un mensaje de error si no se ingresa el efectivo cancelado por el cliente", () => {
    const calcu = new maquinaCambio;
    expect(calcu.verificarMontoEfectivo(20, null)).toEqual("Error de cantidad, ingrese el y/o datos faltantes");
  });

  


});
