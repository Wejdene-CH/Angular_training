import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './components/color-changer/color-changer.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { FormsModule } from '@angular/forms';
import { ColorChildComponent } from './components/color-child/color-child.component';
import { CvComponent } from './components/cv/cv.component';
import { ListeComponent } from './components/cv/liste/liste.component';
import { ItemComponent } from './components/cv/item/item.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow.directive';
@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    BusinessCardComponent,
    ColorChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    NavbarComponent,
    DefaultImagePipe,
    MiniWordComponent,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
