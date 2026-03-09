import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  standalone: false,
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.css',
})
export class HeroSlider {
currentSlide = 0;
backgrounds = ['assets/img/b9.jpg', 'assets/img/b0.jpg', 'assets/img/b19.jpg'];
}
