import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email = '';
  Password = '';
  

  constructor() { }

  ngOnInit() {
  }
  onlogin(){
    console.log(this.Email);
    console.log(this.Password);
  }

}
