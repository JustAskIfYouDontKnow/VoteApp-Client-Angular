import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogoComponent } from './main-logo.component';

describe('MainLogoComponent', () => {
  let component: MainLogoComponent;
  let fixture: ComponentFixture<MainLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLogoComponent]
    });
    fixture = TestBed.createComponent(MainLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
