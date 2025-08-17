import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShutterOverlayComponent } from '../../shared/shutter-overlay/shutter-overlay.component';

export type ShutterState = 'opening' | 'open' | 'closing' | 'closed';

@Injectable({
  providedIn: 'root'
})
export class ShutterTransitionService {

  private overlayRef: OverlayRef | null = null;
  state: ShutterState = 'closed';

  private closedSub = new Subject<void>();
  private openedSub = new Subject<void>();

  get isOverlayVisible(): boolean { return this.state !== 'closed'; }

  constructor(private overlay: Overlay) { }

  trigger(): Subject<void> {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({ hasBackdrop: false });
    }
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(new ComponentPortal(ShutterOverlayComponent));
    }

    this.state = 'closing';

    // L'observable emette quando l'animazione di chiusura è finita
    return this.closedSub;
  }

  open() {
      if (this.state !== 'closing') return;
      this.state = 'opening';
  }

  // Chiamato dal component overlay quando l'animazione di chiusura è completa
  notifyClosed() {
    this.state = 'open';
    this.closedSub.next();
    this.closedSub.complete();
    this.closedSub = new Subject<void>();
  }

  // Chiamato dal component overlay quando l'animazione di apertura è completa
  notifyOpened() {
    this.state = 'closed';
    this.openedSub.next();
    this.openedSub.complete();
    this.openedSub = new Subject<void>();

    // Scollega l'overlay dal DOM quando non serve
    if (this.overlayRef?.hasAttached()) {
        this.overlayRef.detach();
    }
  }
}