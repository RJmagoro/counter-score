import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  pages = [
    { name: 'About',page: 'about'},
    { name: 'statistics',page: 'statistics'}
   ];

  constructor() { }

  ngOnInit() {
  }

}
