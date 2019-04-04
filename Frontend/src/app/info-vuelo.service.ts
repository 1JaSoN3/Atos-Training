import { usuario } from './usuario';
import { nuevoVuelo } from './nuevoVuelo';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { infoVuelo } from "./infoVuelos";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";




let httpOptions = {
  headers: new HttpHeaders({
    
    
  })
};

let accessToken : string = "";
var headers : HttpHeaders = new HttpHeaders(); 

@Injectable({
  providedIn: "root"
})
export class InfoVueloService {
  constructor(private http: HttpClient, private router: Router) {
    this.observableVuelos = new BehaviorSubject<infoVuelo[]>(this.infoVuelos);
    this.miUsuario = new usuario;
      
  }
  public infoVuelos: Array<infoVuelo> = [];
  observableVuelos: BehaviorSubject<infoVuelo[]>;
  miUsuario : usuario;

  eventChange() {
    
    httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization':'Bearer ' + localStorage.getItem("token")
      })
    };
    this.observableVuelos.next(this.infoVuelos);

    
  }

  isDataLoaded: boolean = false;
  currentRole : string[] = [];
  

  customHeader : {};
  
  
  


  private remoteUrl = "http://localhost:8080";


  isLoaded(): boolean {
    return this.isDataLoaded;
  }

  getVuelo(vueloid: number) {
    for (let i = 0; i < this.infoVuelos.length; i++) {
      if (this.infoVuelos[i].id === vueloid) {
        return this.infoVuelos[i];

      }
     
    }
    return {
      id: 0,
      vuelo: "unknown",
      destino: "unknown",
      embarque: new Date(),
      puerta: "unknown",
      salida: new Date(),
      tiempo: new Date(),
      avion: "unknown"
    };
  }

  setVuelos(infoVuelos: Array<infoVuelo>): void {
    this.isDataLoaded = true;
    this.infoVuelos = infoVuelos;
  }

  getVuelos() {
    httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization':'Bearer ' + localStorage.getItem("token")
      })
    };
    
    let ruta : string;
    if (localStorage.getItem("role") == "ROLE_ADMIN") {
      ruta = "/admin";
    }
    else {
      ruta = "/cliente";
    }

    this.http.get(this.remoteUrl + ruta, httpOptions).subscribe(result => {
      this.infoVuelos = <Array<infoVuelo>>result;
      this.eventChange();
    }, error => {
      
      console.log(error);
    });
  }

  restPostVuelo(nuevoVuelo : nuevoVuelo) : void {
    this.http.post<nuevoVuelo>(this.remoteUrl + '/admin/nuevo',nuevoVuelo, httpOptions).subscribe(result => {
    }, error => {
      console.log(error);
    });
  }

  restPostVuelos(vuelos: Array<infoVuelo>): void {
    this.http.post<Array<infoVuelo>>(this.remoteUrl + '/admin/nuevos', vuelos, httpOptions).subscribe(result => {
    }, error => {
      console.log(error);
    });
  }

  restPutVuelo(editarVuelo : infoVuelo) : void {
   
    
    this.http.put<infoVuelo>(this.remoteUrl + '/admin/editar',editarVuelo, httpOptions).subscribe(result => {
    }, error => {
      console.log(error);
    });
  }

  restDeleteVuelo(id : string) : void {
    this.http.delete(this.remoteUrl + '/admin/eliminar/'+id, httpOptions).subscribe(result => {
    }, error => {
      console.log(error);
    })
  } 

  
}
