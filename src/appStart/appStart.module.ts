import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppStartComponent } from './appStart.component';

@NgModule({
  declarations: [AppStartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppStartComponent],
})
export class AppStartModule {}
