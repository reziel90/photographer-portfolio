import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

/**
 * Directive to lazily load images using the IntersectionObserver API. When the
 * target element enters the viewport, the real image source is assigned. This
 * approach improves performance by deferring image downloads until they are
 * needed【260357107566376†L109-L124】.
 */
@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit, OnDestroy {
  /**
   * The actual image URL to load when the image enters the viewport.
   */
  @Input('appLazyLoad') src!: string;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    // If IntersectionObserver is available, set up an observer. Otherwise load
    // the image immediately.
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      });
      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback for very old browsers: just load the image at once.
      this.loadImage();
    }
  }

  /**
   * Clean up the IntersectionObserver when the directive is destroyed to
   * prevent memory leaks. Disconnecting the observer ensures that no
   * further observations are made once the element is removed from the DOM.
   */
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadImage(): void {
    const imgEl = this.el.nativeElement;
    if (this.src) {
      imgEl.src = this.src;
    }
  }
}