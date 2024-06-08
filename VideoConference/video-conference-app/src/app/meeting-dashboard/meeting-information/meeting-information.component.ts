import { Component, Input } from '@angular/core';
import { Participant } from 'src/app/models/Participant';

@Component({
  selector: 'app-meeting-information',
  templateUrl: './meeting-information.component.html',
  styleUrls: ['./meeting-information.component.scss']
})
export class MeetingInformationComponent {

  constructor() {

  }
  @Input() participantsList: Participant[] = [];

  presentParticipants() {
    console.log("click presentParticipants")
  }
  viewSettings() {
    console.log("click viewSettings")

  }
  presentDetails() {
    console.log("click presentDetails")

  }
  presentManager() {
    console.log("click presentManager")

  }
  exit() {
    console.log("click exit")

  }

}
