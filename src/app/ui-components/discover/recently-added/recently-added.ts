import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-recently-added',
  standalone: false,
  templateUrl: './recently-added.html',
  styleUrl: './recently-added.css',
})
export class RecentlyAdded implements OnInit {
  private songService = inject(SongServices);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  last5Song: SongModel[] = [];
  ngOnInit(): void {
    this.subscription=this.songService.getLast5Songs().subscribe({
      next:response=>{
        this.last5Song=response;
        this.cdr.detectChanges();
        console.log(response);
        setTimeout(() => {
          feather.replace();
        }, 0);
      },
      error:err=>console.error(err)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
