import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDettailsComponent } from './product-dettails.component';

describe('ProductDettailsComponent', () => {
  let component: ProductDettailsComponent;
  let fixture: ComponentFixture<ProductDettailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDettailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDettailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
