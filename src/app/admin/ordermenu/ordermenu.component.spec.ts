import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermenuComponent } from './ordermenu.component';

describe('OrdermenuComponent', () => {
  let component: OrdermenuComponent;
  let fixture: ComponentFixture<OrdermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdermenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
