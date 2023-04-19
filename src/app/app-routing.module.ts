import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
{path:'InicioComponent', component:InicioComponent},
{path:'QuienesSomosComponent', component:QuienesSomosComponent},
{path:'ContactoComponent', component:ContactoComponent},
{path:'CrudComponent', component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
