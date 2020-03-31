import { LoginComponent } from './login/login.component';
import { PanelAdminNuevoUsuarioComponent } from './panel-admin-nuevo-usuario/panel-admin-nuevo-usuario.component';
import { PanelAdminEliminarComponent } from './panel-admin-eliminar/panel-admin-eliminar.component';
import { PanelAdminNuevoComponent } from './panel-admin-nuevo/panel-admin-nuevo.component';
import { PanelAdminEditarComponent } from './panel-admin-editar/panel-admin-editar.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { PanelClienteDetallesComponent } from './panel-cliente-detalles/panel-cliente-detalles.component';
import { PanelClienteComponent } from './panel-cliente/panel-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cliente', component: PanelClienteComponent},
  { path: 'cliente/detalles/:id',  component: PanelClienteDetallesComponent},
  { path: 'admin', component: PanelAdminComponent},
  { path: 'admin/editar/:id', component: PanelAdminEditarComponent},
  { path: 'admin/nuevo', component: PanelAdminNuevoComponent},
  { path: 'admin/eliminar/:id', component: PanelAdminEliminarComponent},
  { path: 'admin/nuevousuario', component: PanelAdminNuevoUsuarioComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
