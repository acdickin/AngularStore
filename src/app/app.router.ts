import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import {CartComponent} from './cart/cart.component';

export const router: Routes=[
	{path: '', redirectTo: 'app', pathMatch: 'full'},
	{path: 'cart', component: CartComponent}
];
export const routes: ModuleWithProviders =RouterModule.forRoot(router);