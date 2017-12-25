import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AccountsCmp} from './accounts_cmp';
import {Ape} from './ape';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AccountsCmp],
  exports: [AccountsCmp],
  providers: [],
})
export class AccountsModule {}
