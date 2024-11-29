import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * @publicApi
 */
export class RepeatDirectiveContext {
  constructor(
    public $implicit: number,
    public count: number
  ) {}

  public get index(): number {
    return this.$implicit;
  }

  public get first(): boolean {
    return this.$implicit === 0;
  }

  public get last(): boolean {
    return this.index === this.count - 1;
  }

  public get even(): boolean {
    return this.$implicit % 2 === 0;
  }

  public get odd(): boolean {
    return this.$implicit % 2 === 1;
  }
}

@Directive({
  selector: '[ngxRepeat]',
  standalone: true
})
export class NgxRepeatDirective {
  @Input() public set ngxRepeat(count: number) {
    for (let i = this.viewContainer.length; i > count; i--) this.viewContainer.remove(i - 1);

    for (let i = this.viewContainer.length; i < count; i++)
      this.viewContainer.createEmbeddedView(this.templateRef, new RepeatDirectiveContext(i, count));

    for (let i = 0; i < this.viewContainer.length; i++) {
      const viewRef = this.viewContainer.get(i) as EmbeddedViewRef<RepeatDirectiveContext>;
      viewRef.context.count = count;
    }
  }

  constructor(
    private templateRef: TemplateRef<RepeatDirectiveContext>,
    private viewContainer: ViewContainerRef
  ) {}
}
