import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternetComponent } from './registernet.component';

describe('RegisternetComponent', () => {
  let component: RegisternetComponent;
  let fixture: ComponentFixture<RegisternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
