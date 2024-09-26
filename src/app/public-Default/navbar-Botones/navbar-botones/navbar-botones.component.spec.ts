import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBotonesComponent } from './navbar-botones.component';

describe('NavbarBotonesComponent', () => {
  let component: NavbarBotonesComponent;
  let fixture: ComponentFixture<NavbarBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBotonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
