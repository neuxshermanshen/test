import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTopComponent } from './block-top.component';

describe('BlockTopComponent', () => {
  let component: BlockTopComponent;
  let fixture: ComponentFixture<BlockTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
