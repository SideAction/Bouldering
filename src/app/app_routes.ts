import {NgModule} from '@angular/core';

import {ContentedCmp} from './../contented/contented_cmp';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeCmp} from './../bouldering/home_cmp';
import {BoulderMapsCmp} from './../bouldering/boulder_maps_cmp';
import {BoulderCmp} from './../bouldering/boulder_cmp';
import {AccountsCmp} from './../accounts/accounts_cmp';


const appRoutes = [
    {path: '', redirectTo: '/ui/home', pathMatch: 'full'},
    {path: 'ui/home', component: HomeCmp},
    {path: 'ui/boulder', component: BoulderCmp},
    {path: 'ui/maps', component: BoulderMapsCmp},
    {path: 'ui/accounts', component: AccountsCmp},
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [{provide: APP_BASE_HREF, useValue: ''}],
    exports: [RouterModule]
})
export class AppRoutes {}
