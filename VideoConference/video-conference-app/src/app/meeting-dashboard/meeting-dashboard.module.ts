import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingInformationComponent } from './meeting-information/meeting-information.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MeetingTitleComponent } from './meeting-title/meeting-title.component';



@NgModule({
  declarations: [
    MeetingInformationComponent,
    MeetingTitleComponent
  ],
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule
  ],
  exports: [MeetingInformationComponent, MeetingTitleComponent]


})
export class MeetingDashboardModule { }
