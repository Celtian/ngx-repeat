import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxRepeatDirective } from './ngx-repeat.directive';

describe('NgxRepeatDirective', () => {
  @Component({
    template: ` <div
      *ngxRepeat="3; let index = index; let even = even; let odd = odd; let first = first; let last = last"
    >
      {{ index }} {{ even }} {{ odd }} {{ first }} {{ last }}
    </div>`,
    imports: [NgxRepeatDirective]
  })
  class TestDirectiveComponent {
    @ViewChild(NgxRepeatDirective) public directive: NgxRepeatDirective;

    public count = 3;

    public increment(): void {
      if (this.count < 100) {
        this.count++;
      }
    }

    public decrement(): void {
      if (this.count > 0) {
        this.count--;
      }
    }
  }

  let fixture: ComponentFixture<TestDirectiveComponent>;
  let component: TestDirectiveComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({ imports: [NgxRepeatDirective, TestDirectiveComponent] }).createComponent(
      TestDirectiveComponent
    );
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component.directive).toBeTruthy();
  });
});
