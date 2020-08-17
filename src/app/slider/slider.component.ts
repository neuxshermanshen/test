import { Component, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

type SliderData = {
  img: string;
};

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, showIndicators: false } }
  ],
})
export class SliderComponent {

  @Input() windowWidth = 0;

  datas: SliderData[] = [
    {
      img: 'slider-1.png'
    },
    {
      img: 'slider-2.png'
    },
    {
      img: 'slider-3.png'
    },
  ]

  constructor() { }

}
