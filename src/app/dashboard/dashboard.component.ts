import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // debugger
    this.dataService.fetchData().subscribe((response) => {
      this.data = response;
    });
  }
}

