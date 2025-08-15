import { Component } from '@angular/core';

interface GalleryItem {
  src: string;
  caption: string;
  category: string;
}

/**
 * Paintings page component. A separate gallery for digital or traditional
 * paintings. This component mirrors the structure of the PhotosComponent
 * but uses its own dataset and categories.
 */
@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css'],
})
export class PaintingsComponent {
  categories = ['all', 'digital', 'traditional'];
  selectedCategory = 'all';

  images: GalleryItem[] = [
    {
      src: 'https://picsum.photos/id/20/800/600',
      caption: 'Abstract Dreams',
      category: 'digital'
    },
    {
      src: 'https://picsum.photos/id/21/800/600',
      caption: 'Nature\'s Embrace',
      category: 'traditional'
    }
  ];

  selectedImage?: GalleryItem;
  displayDialog = false;

  get filteredImages(): GalleryItem[] {
    if (this.selectedCategory === 'all') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  openImage(img: GalleryItem): void {
    this.selectedImage = img;
    this.displayDialog = true;
  }
}