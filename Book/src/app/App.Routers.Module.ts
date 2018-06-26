import { ViewComponent } from './component/view/view.component';
import { DetailsComponent } from './component/details/details.component';
import { ExpoleComponent } from './component/expole/expole.component';
import { RegisterComponent } from './component/register/register.component';


export const AppRoutes  = [

   
    
    { path: '', component: ExpoleComponent},    
    { path: 'register', component: RegisterComponent },
     { path: 'details', component: DetailsComponent },      
        { path: 'view', component: ViewComponent }
    
    
    
 ];





