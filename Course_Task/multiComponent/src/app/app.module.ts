import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComComponent } from './first-com/first-com.component';
import { SecondComComponent } from './second-com/second-com.component';
import { ThirdComComponent } from './third-com/third-com.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComComponent,
    SecondComComponent,
    ThirdComComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
