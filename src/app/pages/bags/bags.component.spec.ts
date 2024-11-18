import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bagsComponent } from './bags.component';

describe('bagsComponent', () => {
  let component: bagsComponent;
  let fixture: ComponentFixture<bagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [bagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(bagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
