import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionIdeasComponent } from './position-ideas.component';

describe('PositionIdeasComponent', () => {
  let component: PositionIdeasComponent;
  let fixture: ComponentFixture<PositionIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
