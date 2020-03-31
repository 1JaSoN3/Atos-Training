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
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    alert("El usuario es " + username + " y la pass es " + password);
  }
  private remoteUrl = "http://localhost:8080";
  usuario: any;
  rolAdmin = [];
  restLoginUser(usuario: any): void {
    this.http.post(this.remoteUrl + "/api/auth/signin", usuario).subscribe(
      (result: any) => {
        console.log("autenticado");

        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("role", result.authorities[0].authority);

        if (result.authorities[0].authority == "ROLE_ADMIN") {
          this.router.navigateByUrl("admin");
        } else {
          this.router.navigateByUrl("cliente");
        }
      },
      error => {
        alert("Usuario o contraseña erróneo");
      }
    );
  }

  restPostNewUser(nombre: string, contraseña: string, rol: boolean) {
    if (rol) {
      this.rolAdmin.push("admin");
    } else {
      this.rolAdmin.push("user");
    }

    this.usuario =
      '{"username" : "' +
      nombre +
      '", "password" : "' +
      contraseña +
      '", "role" : ["' +
      this.rolAdmin +
      '"]}';

    this.http
      .post(this.remoteUrl + "/api/auth/signup", JSON.parse(this.usuario))
      .subscribe(
        (result: any) => {
          alert("Usuario creado");
        },
        error => {
          alert("Error creando usuario");
        }
      );
    this.rolAdmin = [];
  }
}
