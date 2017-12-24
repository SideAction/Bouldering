import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutes} from './app_routes';
import {App} from './app';

import {ContentedModule} from './../contented/contented_module';
import {BoulderingModule} from './../bouldering/module';
import {AccountsModule} from './../accounts/module';

@NgModule({
  imports: [BrowserModule, AppRoutes, HttpClientModule, AppRoutes,
      ContentedModule,
      BoulderingModule
  ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
