import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
      this.router.navigate(['exploer/booking']);
    }else if (this.name === 'booking'){
      this.router.navigate(['booking'] , { queryParams: {fname: this.fname, lname: this.lname, id: this.id, cell: this.cell, email: this.email,
         arrive: this.arrive, depart: this.depart, people: this.people,room: this.room, badding: this.bedding, comment: this.comment } } );
    }
  }

 

}
