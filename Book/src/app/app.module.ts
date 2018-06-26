import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../app/App.Routers.Module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './component/details/details.component';
import { ExpoleComponent } from './component/expole/expole.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewComponent } from './component/view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    ExpoleComponent,
    RegisterComponent,
    NavbarComponent,
    DetailsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(AppRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
