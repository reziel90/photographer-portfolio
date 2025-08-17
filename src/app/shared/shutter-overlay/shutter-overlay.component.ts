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

  private partsDone = 0;

  onAnimEnd(e: AnimationEvent) {
    const name = e.animationName;
    const el = e.target as HTMLElement;

    if (!el.classList.contains('flap')) return;

    // Both opening and closing animations are on the .flap element
    if (name.includes('shutter-close') || name.includes('shutter-open')) {
        this.partsDone++;
        if (this.partsDone >= 6) {
            this.partsDone = 0;
            if (this.state === 'closing') {
                this.svc.notifyClosed();
            } else if (this.state === 'opening') {
                this.svc.notifyOpened();
            }
        }
    }
  }
}
