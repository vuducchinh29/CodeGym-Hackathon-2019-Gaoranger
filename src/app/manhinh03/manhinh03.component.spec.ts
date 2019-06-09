import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manhinh03Component } from './manhinh03.component';

describe('Manhinh03Component', () => {
  let component: Manhinh03Component;
  let fixture: ComponentFixture<Manhinh03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manhinh03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manhinh03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
