import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

type Wine = {
  name: string;
  year: number;
  img: string;
  detail: string;
  am: string;
  ws: string;
  wa: string;
  vintage: number;
  country: string;
  Region: string;
  size: string;
  stock: number;
  price: number;
  salePrice: number
}

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.scss']
})
export class BlockItemComponent implements OnInit, OnChanges {

  @Input() windowWidth = 0;
  @Input() title = '';
  @Input() data: Wine[] = [];

  get isMobile() { return this.windowWidth < 768; }

  index = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.windowWidth) {
      const previous = changes.windowWidth.previousValue;
      const current = changes.windowWidth.currentValue;

      if (
        (previous >= 768 && current < 768)
        || (previous < 768 && current >= 768)
      ) {
        this.index = 0;
      }
    }
  }

  ngOnInit(): void {
  }

  getCurrentData() {
    return (this.data || []).filter((d, i) => {
      if (!this.isMobile) {
        return i < this.index * 4 + 4 && i >= (this.index - 1) * 4 + 4;
      } else {
        return i === this.index;
      }
    });
  }

}
