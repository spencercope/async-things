/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithResolveComponent } from './with-resolve.component';

describe('WithResolveComponent', () => {
  let component: WithResolveComponent;
  let fixture: ComponentFixture<WithResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
