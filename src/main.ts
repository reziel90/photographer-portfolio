import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap the root Angular module. Errors during bootstrap are logged to
// the console so they can be addressed during development.
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));