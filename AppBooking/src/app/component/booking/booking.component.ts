import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  fname:'';
  lname:'';
  id:'';
  cell:'';
  email:'';
  arrive:'';
  depart:'';
  people:'';
  room:'';
  bedding:'';
  comment:'';

  constructor( private router: Router) { }

  ngOnInit() {

      }
      onlogin(){
        this.router.navigate(['view']),{ queryParams: {fname: this.fname, lname: this.lname, id: this.id, cell: this.cell, email: this.email, arrive: this.arrive, depart: this.depart, people: this.people,room: this.room, badding: this.bedding, comment: this.comment}}}
      }


