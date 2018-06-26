import { ViewComponent } from './component/view/view.component';
import { Router } from '@angular/router';

import { BookingComponent } from './component/booking/booking.component';
import { Component } from '@angular/core';

import { ExploreComponent } from './component/explore/explore.component';



export const AppRouters = [

    { path: '',Component: ExploreComponent},
    { path: 'booking',Component: BookingComponent},
    { path: 'view', ViewComponent},

]