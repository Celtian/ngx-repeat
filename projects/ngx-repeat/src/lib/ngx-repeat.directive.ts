import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * @publicApi
 */
export class RepeatDirectiveContext {
  constructor(public $implicit: number, private count: number) {}

  public get index(): number {
    return this.$implicit;
  }

  public get first(): boolean {
    return this.$implicit === 0;
  }

  public get last(): boolean {
    return this.$implicit + 1 >= this.count;
  }

  public get even(): boolean {
    return this.$implicit % 2 === 0;
  }

  public get odd(): boolean {
    return this.$implicit % 2 === 1;
  }
}

@Directive({
  selector: '[ngxRepeat]'
})
export class NgxRepeatDirective {
  @Input() public set ngxRepeat(times: number) {
    let count = this.viewContainer.length;
    for (let i = this.viewContainer.length; i > times; i--) this.viewContainer.remove(i - 1);

    for (let i = count; i < times; i++)
      this.viewContainer.createEmbeddedView(this.templateRef, new RepeatDirectiveContext(i, times));
  }

  constructor(private templateRef: TemplateRef<RepeatDirectiveContext>, private viewContainer: ViewContainerRef) {}
}
