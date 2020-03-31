import { usuario } from "./usuario";
import { nuevaRopa } from "./nuevaRopa";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { infoRopa } from "./infoRopas";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

let httpOptions = {
  headers: new HttpHeaders({})
};

let accessToken: string = "";
var headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: "root"
})
export class InfoRopaService {
  constructor(private http: HttpClient, private router: Router) {
    this.observableRopas = new BehaviorSubject<infoRopa[]>(this.infoRopas);
    this.miUsuario = new usuario();
  }
  public infoRopas: Array<infoRopa> = [];
  observableRopas: BehaviorSubject<infoRopa[]>;
  miUsuario: usuario;

  eventChange() {
    httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    };
    this.observableRopas.next(this.infoRopas);
  }

  isDataLoaded: boolean = false;
  currentRole: string[] = [];

  customHeader: {};

  private remoteUrl = "http://localhost:8080";

  isLoaded(): boolean {
    return this.isDataLoaded;
  }

  getRopa(ropaid: number) {
    for (let i = 0; i < this.infoRopas.length; i++) {
      if (this.infoRopas[i].id === ropaid) {
        return this.infoRopas[i];
      }
    }
    return {
      id: 0,
      ropa: "unknown",
      marca: "unknown",
      talla: "unknown",
      color: "unknown",
      precio: "unknown",
      genero: "unknown",
      origen: "unknown"
    };
  }

  setRopas(infoRopas: Array<infoRopa>): void {
    this.isDataLoaded = true;
    this.infoRopas = infoRopas;
  }

  getRopas() {
    httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    };

    let ruta: string;
    if (localStorage.getItem("role") == "ROLE_ADMIN") {
      ruta = "/admin";
    } else {
      ruta = "/cliente";
    }

    this.http.get(this.remoteUrl + ruta, httpOptions).subscribe(
      result => {
        this.infoRopas = <Array<infoRopa>>result;
        this.eventChange();
      },
      error => {
        console.log(error);
      }
    );
  }

  restPostRopa(nuevaRopa: nuevaRopa): void {
    this.http
      .post<nuevaRopa>(this.remoteUrl + "/admin/nuevo", nuevaRopa, httpOptions)
      .subscribe(
        result => {},
        error => {
          console.log(error);
        }
      );
  }

  restPostRopas(ropas: Array<infoRopa>): void {
    this.http
      .post<Array<infoRopa>>(
        this.remoteUrl + "/admin/nuevos",
        ropas,
        httpOptions
      )
      .subscribe(
        result => {},
        error => {
          console.log(error);
        }
      );
  }

  restPutRopa(editarRopa: infoRopa): void {
    this.http
      .put<infoRopa>(this.remoteUrl + "/admin/editar", editarRopa, httpOptions)
      .subscribe(
        result => {},
        error => {
          console.log(error);
        }
      );
  }

  restDeleteRopa(id: string): void {
    this.http
      .delete(this.remoteUrl + "/admin/eliminar/" + id, httpOptions)
      .subscribe(
        result => {},
        error => {
          console.log(error);
        }
      );
  }
}
