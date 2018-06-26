import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Router: any;
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

  constructor() { }

  ngOnInit() {
    this.Router.queryParams.subscribe( params => {

      this.fname = params ['fname'];
      this.lname = params ['lname'];
      this.id = params ['id'];
      this.cell = params ['cell'];
      this.email = params['email'];
      this.arrive = params ['arrive'];
      this.depart = params ['depart'];
      this.people = params ['people'];
      this.room = params ['room'];
      this.bedding = params ['bedding'];
      this.comment = params ['comment'];
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

  


