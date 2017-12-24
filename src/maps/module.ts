import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {GoogleMapsCmp} from './google_maps_cmp';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [GoogleMapsCmp],
  exports: [GoogleMapsCmp],
  providers: [],
})
export class MapsModule {}
