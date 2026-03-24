import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';
import { Subscription } from 'rxjs';
import { PlayerStateService } from '../../../services/player-state.service';
declare var $: any;
@Component({
  selector: 'app-track-carousel',
  standalone: false,
  templateUrl: './track-carousel.html',
  styleUrl: './track-carousel.css',
})
export class TrackCarousel implements OnInit {
  private songService = inject(SongServices);
  private cdr = inject(ChangeDetectorRef);
  private playerState = inject(PlayerStateService);

  playingSongId: number | null = null;
  songDto: SongModel[] = [];
  private subscription: Subscription = new Subscription();

  @ViewChild('slickSlider', { static: false }) slickSlider!: ElementRef;

  ngOnInit(): void {
    this.subscription.add(
      this.songService.getAll().subscribe({
        next: (response) => {
          this.songDto = response;
          this.cdr.detectChanges();
          setTimeout(() => {
            this.initSlickSlider();
          }, 100);
        },
        error: (err) => console.error("API Hatası:", err)
      })
    );

    this.subscription.add(
      this.playerState.currentSong$.subscribe(song => {
        setTimeout(() => {
          this.playingSongId = song ? song.id : null;
          this.cdr.detectChanges();
        });
      })
    );
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
    if (this.playingSongId === song.id) {
      this.playerState.pauseSong();
      console.log(song.title + " durduruldu.");
      return;
    }
    console.log(song.title + " için yetki kontrolü yapılıyor...");

    this.songService.playSong(song.id).subscribe({
      next: (response) => {
        if (response && response.title === 'Erişim Hatası') {
          console.warn("Erişim Reddedildi:", response.description);
          this.playerState.showError(response);
        } else {
          console.log(song.title + " çalınıyor... 🎵");
          this.playerState.playNewSong(song);
        }
      },
      error: (err) => {
        console.error("API Hatası / Tarayıcı İzni:", err);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
