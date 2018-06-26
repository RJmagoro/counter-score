import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  firstname = ""
  lastname = ""
  departure = ""
  ddate = ""
  arrival = ""
  adate = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{this.firstname = params['firstname'];
                                              this.lastname = params['lastname'];
                                              this.departure = params['departure'];
                                              this.ddate = params['ddate'];
                                              this.arrival = params['arrival'];
                                              this.adate = params['adate'];

                                              console.log(this.firstname);
                                              console.log(this.lastname);
                                              console.log(this.ddate);
                                              console.log(this.arrival);
                                              console.log(this.adate);
                                              
                                            })
  }

}
