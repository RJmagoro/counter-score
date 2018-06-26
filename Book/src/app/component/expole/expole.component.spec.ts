import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoleComponent } from './expole.component';

describe('ExpoleComponent', () => {
  let component: ExpoleComponent;
  let fixture: ComponentFixture<ExpoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
