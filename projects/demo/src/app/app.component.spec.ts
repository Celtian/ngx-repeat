import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should get github link`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/celtian/ngx-repeat');
  });

  it('should increment', () => {
    component.increment();
    fixture.detectChanges();
    expect(component.count).toBe(4);
  });

  it('should increment limit', () => {
    for (const i of new Array(100)) {
      component.increment();
    }
    fixture.detectChanges();
    expect(component.count).toBe(100);
  });

  it('should decrement', () => {
    component.decrement();
    fixture.detectChanges();
    expect(component.count).toBe(2);
  });

  it('should decrement limit', () => {
    for (const i of new Array(5)) {
      component.decrement();
    }
    fixture.detectChanges();
    expect(component.count).toBe(0);
  });
});
