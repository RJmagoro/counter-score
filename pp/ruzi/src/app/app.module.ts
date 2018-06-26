import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';
import { FormsModule} from  '@angular/forms';
import { RouterModule} from '@angular/router';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { AppRouters } from 'src/app/router';
import { ListItemComponent } from './component/list-item/list-item.component';

const routes: AppModule = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details-page',
    component: DetailsPageComponent
  },

]


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    LoginComponent,
    AboutComponent,
    DetailsPageComponent,
    StatisticsComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRouters) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
