import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-track-carousel',
  standalone: false,
  templateUrl: './track-carousel.html',
  styleUrl: './track-carousel.css',
})
export class TrackCarousel implements OnInit {
  private songService = inject(SongServices);
  private cdr=inject(ChangeDetectorRef);
  currentAudio: HTMLAudioElement | null = null;
  playingSongId: number | null = null;
  songDto: SongModel[] = [];
  private subscription: Subscription = new Subscription();

  @ViewChild('slickSlider', { static: false }) slickSlider!: ElementRef;

  ngOnInit(): void {
    this.subscription = this.songService.getAll().subscribe({
      next: (response) => {
        this.songDto = response;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.initSlickSlider();
        }, 100);
      },
      error: (err) => console.error("API Hatası:", err)
    });
  }

  private initSlickSlider(): void {
    if (this.slickSlider && this.slickSlider.nativeElement) {
      const slider = $(this.slickSlider.nativeElement);
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
      slider.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        rtl: false,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 6 } },
          { breakpoint: 920, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } }
        ]
      });
    }
  }

  playSong(song: SongModel): void {
    if (!song.audioUrl) {
      console.warn("Bu şarkının ses dosyası bulunamadı!");
      return;
    }

    if (this.playingSongId === song.id && this.currentAudio) {
      this.currentAudio.pause();
      this.playingSongId = null;
      console.log(song.title + " durduruldu.");
      return;
    }

    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    console.log(song.title + " çalınıyor... 🎵");
    this.currentAudio = new Audio(song.audioUrl);
    this.currentAudio.play().catch(error => {
      console.error("Tarayıcı müziği oynatmaya izin vermedi:", error);
    });

    this.playingSongId = song.id;
  }
  ngOnDestroy(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    this.subscription.unsubscribe();
  }
}
