import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
