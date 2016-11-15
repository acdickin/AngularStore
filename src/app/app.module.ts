import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarComponent } from './sidebar.component';
import { AppComponent } from './app.component';
import { TypePipe } from './pipes/type.pipe';
@NgModule({
  declarations: [
  SidebarComponent,
  AppComponent,
  TypePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
