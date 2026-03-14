import { ArtistsCircle } from './ui-components/artist/artists-circle/artists-circle';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Home } from './ui-components/discover/home/home';
import { TopCharts } from './ui-components/charts/top-charts/top-charts';
import { Genres } from './ui-components/genres/genres';
import { ArtistDetail } from './ui-components/artist-detail/artist-detail';

const routes: Routes = [
  //UI Routes
  {path:'',component:UiLayout,children:[
    {path:'',component:Home},
    {path:'charts',component:TopCharts},
    {path:'genres',component:Genres},
    {path:'artists',component:ArtistsCircle},
    {path:'artist-detail/:id',component:ArtistDetail},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
