import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { PAGE_ROUTES } from './pages.routes';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgessComponent } from './progess/progess.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graphic1Component
    ],
    exports: [
        DashboardComponent,
        ProgessComponent,
        Graphic1Component,
    ],
    imports:[
        SharedModule,
        PAGE_ROUTES
    ]

})

export class PageModule { }