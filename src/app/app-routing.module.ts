import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PaintingsComponent } from './pages/paintings/paintings.component';
import { ContactComponent } from './pages/contact/contact.component';


/**
 * Defines the client‑side routes for the portfolio. Each route is bound to a
 * single page component. A wildcard route redirects unknown URLs back to the
 * home page.
 */
const routes: Routes = [
  { path: '', component: HomeComponent }, // Apply guard
  { path: 'about', component: AboutComponent }, // Apply guard
  { path: 'photos', component: PhotosComponent }, // Apply guard
  { path: 'paintings', component: PaintingsComponent }, // Apply guard
  { path: 'contact', component: ContactComponent }, // Apply guard
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {} 