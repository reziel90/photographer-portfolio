import { Component } from '@angular/core';

/**
 * Home page component. Presents a full‑width hero carousel and an introduction
 * inviting visitors to explore the photographer's work. The hero images are
 * placeholders; replace the files under `src/assets/images` with your own
 * photography to personalise the site.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /**
   * Items used by the PrimeNG carousel on the home page. Each object
   * references an image in the assets folder and includes alternative text.
   */
  carouselImages = [
    {
      source: 'assets/images/hero-placeholder.jpg',
      alt: 'Ethereal fine art photograph placeholder',
      title: 'Capturing moments of magic',
      subtitle: 'Explore weddings, portraits and more'
    },
    {
      source: 'assets/images/hero-placeholder.jpg',
      alt: 'Dreamy portrait placeholder',
      title: 'Stories told with light',
      subtitle: 'Fine art photography and paintings'
    }
  ];
}