import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManipulateObjectsComponent } from './manipulate-objects/manipulate-objects.component';

@NgModule({
  declarations: [
    AppComponent,
    ManipulateObjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
