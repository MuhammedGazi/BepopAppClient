import { ArtistsCircle } from './ui-components/artist/artists-circle/artists-circle';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Home } from './ui-components/discover/home/home';
import { TopCharts } from './ui-components/charts/top-charts/top-charts';
import { Genres } from './ui-components/genres/genres';
import { ArtistDetail } from './ui-components/artist-detail/artist-detail';
import { AlbumDetail } from './ui-components/album-detail/album-detail';
import { Login } from './ui-components/login/login';
import { AuthGuard } from './_guards/auth-guard';

const routes: Routes = [
  { path: 'login', component: Login },
  //UI Routes
  {path:'',component:UiLayout,children:[
    {path:'discover',component:Home},
    {path:'charts',component:TopCharts},
    {path:'genres',component:Genres},
    {path:'artists',component:ArtistsCircle,canActivate: [AuthGuard]},
    {path:'artist-detail/:id',component:ArtistDetail,canActivate: [AuthGuard]},
    {path:'album-detail/:id',component:AlbumDetail},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
