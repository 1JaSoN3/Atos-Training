import { ExcelService } from "./excel.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PanelClienteComponent } from "./panel-cliente/panel-cliente.component";
import { PanelClienteDetallesComponent } from "./panel-cliente-detalles/panel-cliente-detalles.component";
import { PanelAdminComponent } from "./panel-admin/panel-admin.component";
import { PanelAdminEditarComponent } from "./panel-admin-editar/panel-admin-editar.component";
import { PanelAdminNuevoComponent } from "./panel-admin-nuevo/panel-admin-nuevo.component";
import { PanelAdminEliminarComponent } from "./panel-admin-eliminar/panel-admin-eliminar.component";
import { PanelAdminNuevoUsuarioComponent } from "./panel-admin-nuevo-usuario/panel-admin-nuevo-usuario.component";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { LoginComponent } from "./login/login.component";
import { FiltersPipe } from "./pipes/filters.pipe";
import { OrderPipe } from "./pipes/order.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PanelClienteComponent,
    PanelClienteDetallesComponent,
    PanelAdminComponent,
    PanelAdminEditarComponent,
    PanelAdminNuevoComponent,
    PanelAdminEliminarComponent,
    PanelAdminNuevoUsuarioComponent,
    LoginComponent,
    FiltersPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
