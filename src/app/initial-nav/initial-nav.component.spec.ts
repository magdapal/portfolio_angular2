/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitialNavComponent } from './initial-nav.component';

describe('InitialNavComponent', () => {
  let component: InitialNavComponent;
  let fixture: ComponentFixture<InitialNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
