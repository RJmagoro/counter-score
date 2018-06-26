import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ExplorePageComponent } from './Component/explore-page/explore-page.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { appRoutes } from './routers';
import { BookingDetailsComponent } from './Component/booking-details/booking-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ExplorePageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookingDetailsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
