/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegularComponent } from './regular.component';

describe('RegularComponent', () => {
  let component: RegularComponent;
  let fixture: ComponentFixture<RegularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
