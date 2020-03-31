import { nuevaRopa } from "./../nuevaRopa";
import { ActivatedRoute, Router } from "@angular/router";
import { InfoRopaService } from "./../info-ropa.service";
import { Component, OnInit } from "@angular/core";
import { infoRopa } from "../infoRopas";

@Component({
  selector: "app-panel-admin-nuevo",
  templateUrl: "./panel-admin-nuevo.component.html",
  styleUrls: ["./panel-admin-nuevo.component.css"]
})
export class PanelAdminNuevoComponent implements OnInit {
  constructor(
    private service: InfoRopaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ropa: nuevaRopa;

  volver() {
    this.router.navigateByUrl("/admin");
  }

  salvar() {
    console.log(this.ropa);
    this.service.restPostRopa(this.ropa);
    setTimeout(() => {
      this.router.navigateByUrl("/admin");
    }, 500);
  }

  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.ropa = new nuevaRopa();
    this.ropa.ropa = "";
    this.ropa.marca = "";
    this.ropa.talla = "";
    this.ropa.color = null;
    this.ropa.precio = null;
    this.ropa.genero = null;
    this.ropa.origen = "";
  }
}
