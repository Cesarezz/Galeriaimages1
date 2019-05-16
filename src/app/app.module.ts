import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageDetailComponent } from './components/main/image-detail/image-detail.component';
import { ImageListComponent } from './components/main/image-list/image-list.component';
import { ImageComponent } from './components/main/image-list/image/image.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageDetailComponent,
    ImageListComponent,
    ImageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
