import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-bottom',
  templateUrl: './block-bottom.component.html',
  styleUrls: ['./block-bottom.component.scss']
})
export class BlockBottomComponent implements OnInit {

  @Input() windowWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
