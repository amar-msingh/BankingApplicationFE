import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpayeeComponent } from './showpayee.component';

describe('ShowpayeeComponent', () => {
  let component: ShowpayeeComponent;
  let fixture: ComponentFixture<ShowpayeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpayeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
