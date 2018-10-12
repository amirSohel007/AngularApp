import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import {AppRoutesModule} from './app-routes';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { LearnApiComponent } from './component/learn-api/learn-api.component';
import { LearnFbComponent } from './component/learn-fb/learn-fb.component'

@NgModule({ 
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NgIfComponent,
    NgForComponent,
    LearnApiComponent,
    LearnFbComponent,
 
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
