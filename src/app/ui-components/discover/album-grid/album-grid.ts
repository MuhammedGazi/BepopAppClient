import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AlbumServices } from '../../../services/album-services';
import { AlbumModel } from '../../../models/albumModel';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-album-grid',
  standalone: false,
  templateUrl: './album-grid.html',
  styleUrl: './album-grid.css',
})
export class AlbumGrid implements OnInit {
  private albumService = inject(AlbumServices);
  private subscription:Subscription = new Subscription();
  private cdr = inject(ChangeDetectorRef);
  albumDto:AlbumModel[]=[];
  ngOnInit(): void {
    this.subscription=this.albumService.getAll().subscribe({
      next:response=>{
        this.albumDto=response;
        this.cdr.detectChanges();
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
