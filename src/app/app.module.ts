import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { SidebarComponent } from './sidebar.component';
import { AppComponent } from './app.component';
import { TypePipe } from './pipes/type.pipe';
import { CartComponent } from './cart/cart.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
@NgModule({
  declarations: [
  SidebarComponent,
  AppComponent,
  TypePipe,
  CartComponent,
  SlideshowComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
