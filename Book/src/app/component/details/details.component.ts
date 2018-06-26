import {Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  fname : '';
  lname : '';
   id: '';
  cell: '';
  email: '';
  arrive: '';
  depart: '';
  people: '';
  room: '';
  bedding: '';
  comment: '';
  

  pages = [

    { name: 'explore', page: 'explore'},
    { name: 'register', page: 'register'}
  ];

  constructor( private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params =>{


    this.fname = params['fname'];
    this.lname = params['lname'];
    this.id = params['id'];
    this.cell = params['cell'];
    this.email = params['email'];
    this.arrive = params['arrive'];
    this.depart = params['depart'];
    this.people = params['people'];
    this.room = params['room'];
    this.bedding = params['bedding'];
    this.comment = params['comment'];
    });

    console.log(this.fname);
    console.log(this.lname);
    console.log(this.id);
    console.log(this.cell);
    console.log(this.email);
    console.log(this.arrive);
    console.log(this.depart);
    console.log(this.people);
    console.log(this.room);
    console.log(this.bedding);
    console.log(this.comment);
  }

}
