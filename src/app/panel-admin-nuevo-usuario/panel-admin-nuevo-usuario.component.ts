import { LoginService } from './../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-panel-admin-nuevo-usuario",
  templateUrl: "./panel-admin-nuevo-usuario.component.html",
  styleUrls: ["./panel-admin-nuevo-usuario.component.css"]
})
export class PanelAdminNuevoUsuarioComponent implements OnInit {
  constructor(
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  Username : string;
  Password : string;
  RolAdmin : boolean = false;

  salvar() {
    //alert(this.Username + " " + this.Password + " "  + this.RolAdmin);
    this.service.restPostNewUser(this.Username, this.Password, this.RolAdmin);
    this.router.navigateByUrl("/admin");
  }

  volver() {
    this.router.navigateByUrl("/admin");
  }

  ngOnInit() {}
}
