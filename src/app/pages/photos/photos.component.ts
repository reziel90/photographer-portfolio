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
import { ShutterTransitionService } from 'src/app/core/services/shutter-transition.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  categories = ['all', 'weddings', 'fashion', 'portraits'];
  selectedCategory = 'all';

  images: GalleryItem[] = [
    {
      src: 'https://picsum.photos/id/22/800/600',
      caption: 'Urban Reflections',
      category: 'urban'
    },
    {
      src: 'https://picsum.photos/id/23/800/600',
      caption: 'Nature\'s Embrace',
      category: 'nature'
    }
  ];

  selectedImage?: GalleryItem;
  displayDialog = false;

  constructor(private shutterService: ShutterTransitionService) {}

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
    this.shutterService.trigger().subscribe(() => {
        this.displayDialog = true;
    });
  }

  onDialogHide() {
      this.shutterService.open();
  }
}