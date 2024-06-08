import { Component, OnInit } from '@angular/core';
import { MeetingInformationComponent } from './meeting-dashboard/meeting-information/meeting-information.component';
import { MeetingTitleComponent } from './meeting-dashboard/meeting-title/meeting-title.component';
import { ParticipantService } from './services/participent.service';
import { Participant } from './models/Participant';
import { Meeting } from './models/Meeting';
import { MeetingService } from './services/meeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _participantService: ParticipantService, private _meetingService: MeetingService) {

  }
  participantsList: Participant[] = [];
  meeting!: Meeting;

  ngOnInit(): void {
    this.participantsList = this._participantService.getParticipantList()
    this.meeting = this._meetingService.getMeeting()
  }

  title = 'video-conference-app';
}
