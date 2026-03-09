import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-track-carousel',
  standalone: false,
  templateUrl: './track-carousel.html',
  styleUrl: './track-carousel.css',
})
export class TrackCarousel implements AfterViewInit {
  // HTML'deki #slickSlider etiketini yakalıyoruz
  @ViewChild('slickSlider') slickSlider!: ElementRef;

  ngAfterViewInit(): void {
    $(this.slickSlider.nativeElement).slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      rtl: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 6 }
        },
        {
          breakpoint: 920,
          settings: { slidesToShow: 4 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 2 }
        }
      ]
    });
  }
}
