import { Component, OnInit } from '@angular/core';
import { Route,Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname : string;
  lname : string;
   id: string;
  cell: string;
  email: string;
  arrive: string;
  depart: string;
  people: string;
  room: string;
  bedding: string;
  comment: string;
   

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onlogin(){
    this.router.navigate(['details']),{ queryParams: {fname: this.fname, lname: this.lname, id: this.id, cell: this.cell, email: this.email, arrive: this.arrive, depart: this.depart, people: this.people,room: this.room, badding: this.bedding, comment: this.comment}}
  }

}
