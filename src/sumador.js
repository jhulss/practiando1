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
    if (montoVenta === null || efectivo === null)
    {
      return "Error de cantidad, ingrese el y/o datos faltantes"
    }
    else{
      return [montoVenta, efectivo];
    }
      
  }

}
export default maquinaCambio;
