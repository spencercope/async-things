/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithBreezeAndResolveComponent } from './with-breeze-and-resolve.component';

describe('WithBreezeAndResolveComponent', () => {
  let component: WithBreezeAndResolveComponent;
  let fixture: ComponentFixture<WithBreezeAndResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithBreezeAndResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithBreezeAndResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
