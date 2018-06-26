import { LoginComponent } from "./component/login/login.component";
import { DetailsPageComponent } from "./component/details-page/details-page.component";
import { StatisticsComponent} from "./component/statistics/Statistics.component";
import { AboutComponent } from './component/about/about.component';

 
export const AppRouters= [

//{ path: '', component: LoginComponent}

{ path: 'detail',component: DetailsPageComponent },

{ path: 'about', component: AboutComponent },

{ path: 'statistics', component:  StatisticsComponent}




] ;

