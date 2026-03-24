import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-play-button',
  standalone: false,
  templateUrl: './play-button.html',
  styleUrl: './play-button.css',
})
export class PlayButton {
  @Input() isPlaying: boolean = false;

  @Output() playClick = new EventEmitter<void>();

  onClick(event: Event) {
    event.stopPropagation();
    this.playClick.emit();
  }
}
