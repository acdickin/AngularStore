import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { SidebarComponent } from './sidebar.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HeaderComponent } from './header.component';

import { CollectableService } from './shared/collectable.service';

import { TypePipe } from './pipes/type.pipe';
import { SplashComponent } from './splash/splash.component';
import { FooterComponent } from './footer.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
  SidebarComponent,
  AppComponent,
  CartComponent,
  SlideshowComponent,
  ShopComponent,
  HeaderComponent,
  TypePipe,
  SplashComponent,
  FooterComponent,
  CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
