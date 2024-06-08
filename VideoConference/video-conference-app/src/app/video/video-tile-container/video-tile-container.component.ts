import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/services/participent.service';

@Component({
  selector: 'app-video-tile-container',
  templateUrl: './video-tile-container.component.html',
  styleUrls: ['./video-tile-container.component.scss']
})
export class VideoTileContainerComponent implements OnInit {
  constructor(private _participantService: ParticipantService) {

  }
  participantsList: Participant[] = [];
  judgesList: Participant[] = [];
  sidesList: Participant[] = [];

  ngOnInit(): void {
    this.participantsList = this._participantService.getParticipantList()
    this.splitParticipantsByType()
  }

  splitParticipantsByType(): void {
    this.judgesList = this.participantsList.filter(participant => participant.type === 'judge');
    this.sidesList = this.participantsList.filter(participant => participant.type === 'side');
  }

}
