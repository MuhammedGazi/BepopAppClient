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
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    UiLayout,
    Home,
    HeroSlider,
    TrackCarousel,
    AlbumGrid,
    RecentlyAdded,
    Events
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
