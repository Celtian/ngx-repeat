import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxRepeatDirective, RepeatDirectiveContext } from './ngx-repeat.directive';

describe('NgxRepeatDirective', () => {
  @Component({
    template: ` <div
      *ngxRepeat="3; let index = index; let even = even; let odd = odd; let first = first; let last = last"
    >
      {{ index }} {{ even }} {{ odd }} {{ first }} {{ last }}
    </div>`
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
  let templateRef: jasmine.SpyObj<TemplateRef<RepeatDirectiveContext>>;
  let viewContainer: jasmine.SpyObj<ViewContainerRef>;

  beforeEach(() => {
    templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>', ['elementRef', 'createEmbeddedView']);
    viewContainer = jasmine.createSpyObj('ViewContainerRef', [
      'length',
      'remove',
      'createEmbeddedView',
      'createComponent'
    ]);

    fixture = TestBed.configureTestingModule({
      imports: [NgxRepeatDirective],
      declarations: [TestDirectiveComponent],
      providers: [
        { provide: TemplateRef, useValue: templateRef },
        { provide: ViewContainerRef, useValue: viewContainer },
        provideExperimentalZonelessChangeDetection()
      ]
    }).createComponent(TestDirectiveComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new NgxRepeatDirective(templateRef, viewContainer);
    expect(directive).toBeTruthy();
  });
});
