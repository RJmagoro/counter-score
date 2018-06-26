import { Routes } from "@angular/router";
import { ExplorePageComponent } from "./Component/explore-page/explore-page.component";
import { AboutComponent } from "./Component/about/about.component";
import { ContactComponent } from "./Component/contact/contact.component";
import { Component } from "@angular/core";
import { HomeComponent } from "./Component/home/home.component";
import { BookingDetailsComponent } from "./Component/booking-details/booking-details.component";

export const appRoutes: Routes = [
    
          {path:'', component: ExplorePageComponent}, 
          {path: 'home', component: HomeComponent},
          {path: 'about', component: AboutComponent},        
          {path: 'contact', component: ContactComponent},
          {path: 'booking-details', component: BookingDetailsComponent},
  ]