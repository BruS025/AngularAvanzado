import { RouterModule ,Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graphic1Component } from './graphic1/graphic1.component';


const pagesRoutes : Routes =[{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgessComponent },
        { path: 'graphic1', component: Graphic1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
}];

export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);