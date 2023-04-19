import { Component } from '@angular/core';
import { ServicioCrudService } from '../servicio-crud.service';
import { Factura } from '../factura/factura';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
constructor(public miServicio:ServicioCrudService){}
idFactura=0
idCliente=0
iva=0
totalFactura=0
crearFactura(){
  this.miServicio.agregarFacturaServicio(new Factura(this.idFactura, this.idCliente, this.iva, this.totalFactura))
}
borrarFactura(){
this.miServicio.borrarFacturaServicio(new Factura(this.idFactura, this.idCliente, this.iva, this.totalFactura))
}
actualizarFactura(){
this.miServicio.actualizaFacturaServicio(new Factura(this.idFactura, this.idCliente, this.iva, this.totalFactura))
}
devolverListaFactura(){
  return this.miServicio.listaFacturas;
}
}
