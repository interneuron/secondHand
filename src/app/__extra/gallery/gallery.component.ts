import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

const images = [
    '1.jpg', '2.jpg'
];

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
    galleryUrl: string = "assets/gallery/";
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    images: Array<string> = [];

    constructor() {
        this.images = images;
    }

    ngOnInit(): void {
        //https://github.com/lukasz-galka/ngx-gallery
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                imageAutoPlay: false,
                imageAutoPlayInterval: 5000,
                thumbnails: true,
                preview: true,
                previewDescription: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: this.galleryUrl + '1.jpg',
                medium: this.galleryUrl + '1.jpg',
                big: this.galleryUrl + '1.jpg',
            },
            {
                small: this.galleryUrl + '2.jpg',
                medium: this.galleryUrl + '2.jpg',
                big: this.galleryUrl + '2.jpg',
            },
            {
                small: this.galleryUrl + '3.jpg',
                medium: this.galleryUrl + '3.jpg',
                big: this.galleryUrl + '3.jpg',
            },
            {
                small: this.galleryUrl + '4.jpg',
                medium: this.galleryUrl + '4.jpg',
                big: this.galleryUrl + '4.jpg',
            },
            {
                small: this.galleryUrl + '5.jpg',
                medium: this.galleryUrl + '5.jpg',
                big: this.galleryUrl + '5.jpg',
            },
        ];
    }

}
