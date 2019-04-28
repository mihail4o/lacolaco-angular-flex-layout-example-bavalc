import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';

@NgModule({
  imports:      [ BrowserModule, FlexLayoutModule ],
  declarations: [ AppComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
