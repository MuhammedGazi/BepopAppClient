import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Home } from './ui-components/discover/home/home';
import { HeroSlider } from './ui-components/discover/hero-slider/hero-slider';
import { TrackCarousel } from './ui-components/discover/track-carousel/track-carousel';
import { AlbumGrid } from './ui-components/discover/album-grid/album-grid';
import { RecentlyAdded } from './ui-components/discover/recently-added/recently-added';
import { Events } from './ui-components/discover/events/events';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TopCharts } from './ui-components/charts/top-charts/top-charts';
import { TopTracks } from './ui-components/charts/top-tracks/top-tracks';
import { Genres } from './ui-components/genres/genres';
import { ArtistsCircle } from './ui-components/artist/artists-circle/artists-circle';
import { ArtistDetail } from './ui-components/artist-detail/artist-detail';
import { AlbumDetail } from './ui-components/album-detail/album-detail';
import { Login } from './ui-components/login/login';
import { TokenInterceptor } from './_interceptors/token-interceptor';

@NgModule({
  declarations: [
    App,
    UiLayout,
    Home,
    HeroSlider,
    TrackCarousel,
    AlbumGrid,
    RecentlyAdded,
    Events,
    TopCharts,
    TopTracks,
    Genres,
    ArtistsCircle,
    ArtistDetail,
    AlbumDetail,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [App]
})
export class AppModule { }
