class maquinaCambio{
  
  constructor(montoVenta, efectivo){

    this.montoVenta = montoVenta;
    this.efectivo = efectivo;

  }


  calcularCambio(dinero)
  {
    return dinero;
  }

  verificarMontoEfectivo(montoVenta, efectivo)
  {
    return [montoVenta, efectivo];
  }

}
export default maquinaCambio;
