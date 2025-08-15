import { Component } from '@angular/core';

interface GalleryItem {
  src: string;
  caption: string;
  category: string;
}

/**
 * Photos page component. Displays a gallery of photographic works divided into
 * categories such as weddings, fashion and portraits. Clicking an image
 * opens a lightbox dialog. Images are lazily loaded so that only pictures
 * visible in the viewport are downloaded【260357107566376†L109-L124】.
 */
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  categories = ['all', 'weddings', 'fashion', 'portraits'];
  selectedCategory = 'all';

  images: GalleryItem[] = [
    { src: 'assets/images/photo-placeholder-1.jpg', caption: 'Wedding moment', category: 'weddings' },
    { src: 'assets/images/photo-placeholder-2.jpg', caption: 'Fashion portrait', category: 'fashion' },
    { src: 'assets/images/photo-placeholder-1.jpg', caption: 'Candid portrait', category: 'portraits' },
    { src: 'assets/images/photo-placeholder-2.jpg', caption: 'Bridal love', category: 'weddings' },
  ];

  selectedImage?: GalleryItem;
  displayDialog = false;

  /**
   * Filter images by the currently selected category.
   */
  get filteredImages(): GalleryItem[] {
    if (this.selectedCategory === 'all') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  /**
   * Opens the lightbox dialog for the chosen image.
   */
  openImage(img: GalleryItem): void {
    this.selectedImage = img;
    this.displayDialog = true;
  }
}