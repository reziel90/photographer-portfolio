import { Directive, HostListener, Input, inject, Optional } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShutterTransitionService } from '../core/shutter-transition.service';

@Directive({
  selector: '[appShutterLink]',
  standalone: true,
})
export class ShutterLinkDirective {
  private shutter = inject(ShutterTransitionService);

  /** Alternativa per usare la direttiva senza [routerLink] */
  @Input('appShutterLink') to?: string | any[];

  constructor(@Optional() private routerLink: RouterLink) {}

  @HostListener('click', ['$event'])
  async onClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    console.log('[ShutterLink] Click intercepted for:', this.to || this.routerLink);

    let target: string | any[] | undefined = this.to;

    // se non passato via input, prova a usare il RouterLink presente sull’elemento
    if (!target && this.routerLink) {
      // RouterLink espone 'commands' quando usato con array, oppure genera un UrlTree.
      const anyLink = this.routerLink as any;
      if (anyLink['commands'] && anyLink['commands'].length) {
        target = anyLink['commands'];
      } else if (anyLink['urlTree']) {
        target = anyLink['urlTree']; // ShutterService accetta anche UrlTree
      }
    }

    if (!target) {
      console.warn('[ShutterLink] target non trovato (usa [routerLink] o [appShutterLink])');
      return;
    }

    await this.shutter.runWithNavigation(target);
  }
}
