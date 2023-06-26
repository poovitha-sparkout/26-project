import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from '../shared/data.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    DataService
 
  ],
})
export class DashboardModule { }




