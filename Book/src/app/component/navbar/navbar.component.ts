import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() name;


  @Input()fname ;
  @Input()lname ;
  @Input()id;
  @Input()cell;
  @Input()email;
  @Input()arrive;
  @Input()depart;
  @Input()people;
  @Input()room;
  @Input()bedding;
  @Input()comment;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigator(){
    if (name === 'explore'){
      this.router.navigate(['register/exploer']);
    }else if (this.name === 'register'){
      this.router.navigate(['register'] , { queryParams: {fname: this.fname, lname: this.lname, id: this.id, cell: this.cell, email: this.email,
         arrive: this.arrive, depart: this.depart, people: this.people,room: this.room, badding: this.bedding, comment: this.comment } } );
    }
  }

}
