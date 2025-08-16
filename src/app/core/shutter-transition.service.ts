import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

type ShutterState = 'idle' | 'closing' | 'closed' | 'opening';

@Injectable({ providedIn: 'root' })
export class ShutterTransitionService {
  private router = inject(Router);

  state: ShutterState = 'idle';
  isOverlayVisible = false;

  private closedResolve?: () => void;
  private openedResolve?: () => void;

  private t0 = 0;
  private tCloseStart = 0;
  private tClosed = 0;
  private tNavStart = 0;
  private tNavEnd = 0;
  private tOpenStart = 0;
  private tOpened = 0;

  /** chiamata dal componente overlay quando entrambe le parti hanno finito la chiusura */
  notifyClosed() {
    this.state = 'closed';
    this.tClosed = performance.now();
    this.closedResolve?.();
  }

  /** chiamata dal componente overlay quando entrambe le parti hanno finito l’apertura */
  notifyOpened() {
    this.tOpened = performance.now();
    this.openedResolve?.();
  }

  /** Avvia: close → navigate → open */
  async runWithNavigation(target: string | any[] | UrlTree, extras?: any) {
    console.log('[ShutterService] runWithNavigation called with:', target);
    if (this.state !== 'idle') {
      console.warn('[Shutter] transition already running, ignoring.');
      return false;
    }

    this.t0 = performance.now();
    console.log('[Shutter] START');

    // 1) CHIUSURA
    this.isOverlayVisible = true;
    this.state = 'closing';
    this.tCloseStart = performance.now();

    const closedPromise = new Promise<void>(res => (this.closedResolve = res));
    await closedPromise;
    console.log('[Shutter] CLOSED Δms=', Math.round(this.tClosed - this.tCloseStart));

    // 2) NAVIGAZIONE
    this.tNavStart = performance.now();
    let navOk = false;

    if (typeof target === 'string') {
      // se è percorso stringa ("/about", "./x"), usa navigateByUrl
      navOk = await this.router.navigateByUrl(target, extras);
    } else if (Array.isArray(target)) {
      navOk = await this.router.navigate(target as any[], extras);
    } else {
      navOk = await this.router.navigateByUrl(target as UrlTree, extras);
    }
    this.tNavEnd = performance.now();
    console.log('[Shutter] NAV', { ok: navOk, Δms: Math.round(this.tNavEnd - this.tNavStart) });

    // 3) APERTURA
    this.state = 'opening';
    this.tOpenStart = performance.now();

    const openedPromise = new Promise<void>(res => (this.openedResolve = res));
    await openedPromise;

    this.isOverlayVisible = false;
    this.state = 'idle';

    const t1 = performance.now();
    console.table({
      'Close (ms)': Math.round(this.tClosed - this.tCloseStart),
      'Nav (ms)': Math.round(this.tNavEnd - this.tNavStart),
      'Open (ms)': Math.round(this.tOpened - this.tOpenStart),
      'Total (ms)': Math.round(t1 - this.t0),
    });
    return navOk;
  }
}
