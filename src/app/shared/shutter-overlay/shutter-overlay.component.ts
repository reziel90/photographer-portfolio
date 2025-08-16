import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShutterTransitionService } from '../../core/shutter-transition.service';

@Component({
  selector: 'app-shutter-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shutter-overlay.component.html',
  styleUrls: ['./shutter-overlay.component.css'],
})
export class ShutterOverlayComponent {
  constructor(public svc: ShutterTransitionService) {}

  @HostBinding('class.visible') get visible() { return this.svc.isOverlayVisible; }
  get state() { return this.svc.state; }

  private closePartsDone = 0;
  private openPartsDone = 0;

  onAnimEnd(e: AnimationEvent) {
    const name = e.animationName;
    const el = e.target as HTMLElement;

    console.log('[ShutterOverlay] Animation ended:', { name, state: this.state, target: el.className });

    // chiusura
    if (this.state === 'closing' && (name.includes('curtainCloseLeft') || name.includes('curtainCloseRight'))) {
      this.closePartsDone++;
      console.log('[ShutterOverlay] Closing part done. closePartsDone:', this.closePartsDone);
      if (this.closePartsDone >= 2) {
        this.closePartsDone = 0;
        this.svc.notifyClosed();
      }
    }

    // apertura
    if (this.state === 'opening' && (name.includes('curtainOpenLeft') || name.includes('curtainOpenRight'))) {
      this.openPartsDone++;
      console.log('[ShutterOverlay] Opening part done. openPartsDone:', this.openPartsDone);
      if (this.openPartsDone >= 2) {
        this.openPartsDone = 0;
        this.svc.notifyOpened();
      }
    }

    // (Opzionale) gestire qui anche la variante "iris" se la abiliti sotto: basta contare 6 blade
  }
}
