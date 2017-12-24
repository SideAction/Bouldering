import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {MapsModule} from './../maps/module';
import {HomeCmp} from './home_cmp';
import {BoulderCmp} from './boulder_cmp';
import {BoulderMapsCmp} from './boulder_maps_cmp';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [BoulderCmp, HomeCmp, BoulderMapsCmp],
  exports: [BoulderCmp, HomeCmp, BoulderMapsCmp],
  providers: [],
})
export class BoulderingModule {}
