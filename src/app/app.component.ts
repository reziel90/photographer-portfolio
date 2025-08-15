import { Component } from '@angular/core';

/**
 * The root component simply hosts the navigation bar and a router outlet. All
 * other pages are rendered via routing. Keeping this component lean allows
 * layout to be managed in the shared navbar and individual page components.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}