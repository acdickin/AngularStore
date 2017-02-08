import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import {CartComponent} from './cart/cart.component';
import {ShopComponent} from './shop/shop.component';
import {SplashComponent} from './splash/splash.component';
import {CheckoutComponent} from './checkout/checkout.component';
export const router: Routes=[
	{path: '', redirectTo: 'splash', pathMatch: 'full'},
	{path: 'splash', component: SplashComponent},
	{path: 'shop', component: ShopComponent},
	{path: 'cart', component: CartComponent},
	{path: 'checkout', component: CheckoutComponent}

];
export const routes: ModuleWithProviders =RouterModule.forRoot(router);