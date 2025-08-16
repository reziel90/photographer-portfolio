import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Keep RouterOutlet import for template

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photographer-portfolio';

  // No more router event subscription or animation logic here.
  // The new ShutterTransitionService and ShutterLinkDirective handle it.
}