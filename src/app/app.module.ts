import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG modules
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared components and directives
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LazyLoadDirective } from './shared/directives/lazy-load.directive';
import { ShutterOverlayComponent } from './shared/shutter-overlay/shutter-overlay.component';
import { ShutterLinkDirective } from './shared/shutter-link.directive';


// Page components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PaintingsComponent } from './pages/paintings/paintings.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LazyLoadDirective,
    HomeComponent,
    AboutComponent,
    PhotosComponent,
    PaintingsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,

    // PrimeNG
    MenubarModule,
    ButtonModule,
    GalleriaModule,
    CarouselModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,

    ShutterOverlayComponent,
    ShutterLinkDirective,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}