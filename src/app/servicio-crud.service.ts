import { Injectable } from '@angular/core';
import { Factura } from './factura/factura';

@Injectable({
  providedIn: 'root'
})
export class ServicioCrudService {

  constructor() { }
  listaFacturas:Factura[]=[]
  
  agregarFacturaServicio(facturaObjeto:Factura){
    this.listaFacturas.push(facturaObjeto)
  }
  buscarFacturaServicio(facturaObjeto:Factura){
    return this.listaFacturas.find(factura => factura.idFactura == facturaObjeto.idFactura)
  }
  actualizaFacturaServicio(facturaObjeto:Factura){
    //buscar indice
    let elementIndex = this.listaFacturas.findIndex((obj => obj.idFactura == facturaObjeto.idFactura));
    //modificacion
    this.listaFacturas[elementIndex].idCliente = facturaObjeto.idCliente;
    this.listaFacturas[elementIndex].IVA = facturaObjeto.IVA;
    this.listaFacturas[elementIndex].totalFactura = facturaObjeto.totalFactura;
    //console.log("After update: ", osArray[elementIndex]);
  }
  borrarFacturaServicio(facturaObjeto:Factura){
    this.listaFacturas = this.listaFacturas.filter(factura => factura.idFactura != facturaObjeto.idFactura)
  }
}
