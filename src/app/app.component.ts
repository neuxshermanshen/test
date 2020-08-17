import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dian-ran';

  windowWidth = 0;

  data1;
  data2;

  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getData1().subscribe(datas => this.data1 = datas);
    this.dataService.getData2().subscribe(datas => this.data2 = datas);
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
