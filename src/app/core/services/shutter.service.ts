import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShutterService {
  private showShutterSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showShutter$: Observable<boolean> = this.showShutterSubject.asObservable();

  constructor() { }

  closeShutter(): void {
    console.log('ShutterService: Closing shutter');
    this.showShutterSubject.next(true);
  }

  openShutter(): void {
    console.log('ShutterService: Opening shutter');
    this.showShutterSubject.next(false);
  }
}
