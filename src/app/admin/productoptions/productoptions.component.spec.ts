import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoptionsComponent } from './productoptions.component';

describe('ProductoptionsComponent', () => {
  let component: ProductoptionsComponent;
  let fixture: ComponentFixture<ProductoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
