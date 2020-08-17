import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBottomComponent } from './block-bottom.component';

describe('BlockBottomComponent', () => {
  let component: BlockBottomComponent;
  let fixture: ComponentFixture<BlockBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
