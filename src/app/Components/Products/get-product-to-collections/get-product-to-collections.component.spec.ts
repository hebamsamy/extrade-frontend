import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductToCollectionsComponent } from './get-product-to-collections.component';

describe('GetProductToCollectionsComponent', () => {
  let component: GetProductToCollectionsComponent;
  let fixture: ComponentFixture<GetProductToCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductToCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProductToCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
