import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardLoginComponent } from './dasboard-login.component';

describe('DasboardLoginComponent', () => {
  let component: DasboardLoginComponent;
  let fixture: ComponentFixture<DasboardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
