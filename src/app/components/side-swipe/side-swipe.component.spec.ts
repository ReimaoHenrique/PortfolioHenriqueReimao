import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSwipeComponent } from './side-swipe.component';

describe('SideSwipeComponent', () => {
  let component: SideSwipeComponent;
  let fixture: ComponentFixture<SideSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideSwipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
