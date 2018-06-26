import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  firstname = ""
  lastname = ""
  departure = ""
  ddate = ""
  arrival = ""
  adate = ""

  ngOnInit() {
  }
  btnSubmit(){

   
    this.router.navigate(['booking-details'],{queryParams:{firstname:this.firstname, lastname:this.lastname, departure:this.departure, ddate: this.ddate, arrival:this.arrival, adate:this.adate}})
  }

}
