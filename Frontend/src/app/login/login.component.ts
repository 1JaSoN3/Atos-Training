import { InfoVueloService } from './../info-vuelo.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  usuario : any;

  constructor(private service : LoginService) { }

  ngOnInit() {
  }

  login(){
    this.usuario = '{"username" : "' + this.username + '", "password" : "' + this.password + '"}'; 
    
    this.service.restLoginUser(JSON.parse(this.usuario));
  };
}
