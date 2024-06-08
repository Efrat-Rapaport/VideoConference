import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingDashboardModule } from './meeting-dashboard/meeting-dashboard.module';
import { MaterialModule } from './material/material.module';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MeetingDashboardModule, MaterialModule, VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
