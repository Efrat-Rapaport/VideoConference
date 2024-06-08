import { Component, Input } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting';

@Component({
  selector: 'app-meeting-title',
  templateUrl: './meeting-title.component.html',
  styleUrls: ['./meeting-title.component.scss']
})
export class MeetingTitleComponent {
  @Input() meeting!: Meeting;


}
