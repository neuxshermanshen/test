import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() windowWidth = 0;

  get isMobile() { return this.windowWidth < 768; }

  isScrollTop = true;

  navigations = ['SHOP', 'PROMOTIONS', 'EVENTS', 'ABOUT US', 'CONTACT'];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWidowScroll(ev) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.isScrollTop = scrollTop === 0;
  }

}
