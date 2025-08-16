import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  private shutterStateSubject = new BehaviorSubject<boolean>(false); // false = open, true = closed
  public shutterState$ = this.shutterStateSubject.asObservable();

  private shutterClosedSignalSubject = new Subject<void>();
  public shutterClosedSignal$ = this.shutterClosedSignalSubject.asObservable();

  constructor() { }

  showShutter(): void {
    console.log(performance.now(), 'TransitionService: showShutter called');
    this.shutterStateSubject.next(true);
  }

  hideShutter(): void {
    console.log(performance.now(), 'TransitionService: hideShutter called');
    this.shutterStateSubject.next(false);
  }

  signalShutterClosed(): void {
    console.log(performance.now(), 'TransitionService: signalShutterClosed called');
    this.shutterClosedSignalSubject.next();
  }
}