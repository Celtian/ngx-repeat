import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRepeatModule } from 'projects/ngx-repeat/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxRepeatModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
