import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDefaultComponent } from './n-default.component';

describe('NDefaultComponent', () => {
  let component: NDefaultComponent;
  let fixture: ComponentFixture<NDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
