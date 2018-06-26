import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { BookingComponent } from './component/booking/booking.component';
import { ViewComponent } from './component/view/view.component';
import { ExploreComponent } from './component/explore/explore.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ComponentComponent } from './component/component.component';
import { Router, RouterModule } from '@angular/router';

const Routes = [
  { path: '', Component: ExploreComponent},
  { path: 'booking', Component: BookingComponent},
  { path: 'view', Component: ViewComponent},
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    
    BookingComponent,
    ViewComponent,
    ExploreComponent,
    NavBarComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
