import { Component, OnInit, Input } from '@angular/core';

type Info = {
  title: string;
  text: string;
  img: string;
};

type Heightlight = {
  id: number;
  title: string;
  text: string;
};

@Component({
  selector: 'app-block-top',
  templateUrl: './block-top.component.html',
  styleUrls: ['./block-top.component.scss']
})
export class BlockTopComponent implements OnInit {

  @Input() windowWidth = 0;

  introduces: Info[] = [
    {
      title: 'Trusted Wine Delivery Service',
      text: 'Deliver Wines with Our New Temperature Controlled Truck',
      img: 'image-53-4.png',
    },
    {
      title: 'Incredible Value Premiun Wines',
      text: 'Work with Producers and Negociants to Bring You Best Value Wines',
      img: 'image-54-4.png',
    },
    {
      title: 'Free Delivery',
      text: 'Spend <span class="font-weight-bold">HK$1,800</span> to enjoy free delivery to a single location in Hong Kong Island, Kowloon or New Territories',
      img: 'image-55.png',
    },
  ];

  heightlights: Heightlight[] = [
    {
      id: 1,
      title: 'Shop Promotions',
      text: 'Check out latest offers in shops!',
    },
    {
      id: 2,
      title: 'Smart Buys',
      text: 'Well-priced, high-quality wines!',
    },
    {
      id: 3,
      title: 'Top Rated Wines',
      text: 'Wine scores 90 point or higher!',
    },
    {
      id: 4,
      title: 'Events',
      text: 'What is happening now!',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
