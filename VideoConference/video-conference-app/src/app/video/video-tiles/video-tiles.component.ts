import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant';

@Component({
  selector: 'app-video-tiles',
  templateUrl: './video-tiles.component.html',
  styleUrls: ['./video-tiles.component.scss']
})
export class VideoTilesComponent implements OnInit {

  constructor() {

  }
  @Input() participantsList: Participant[] = [];

  ngOnInit(): void {
    console.log(this.participantsList)
  }

  calculateCols(): number {
    const numParticipants = this.participantsList.length;
    if (numParticipants === 1) {
      return 1;
    } else if (numParticipants > 1 && numParticipants <= 4) {
      return 2;
    } else if (numParticipants > 2 && numParticipants <= 9) {
      return 3;
    } else {
      return 4;
    }
  }

  calculateRowHeight(): string {
    const numParticipants = this.participantsList.length;
    const totalHeightPercentage = 98; // Total height of the grid
    const cols = this.calculateCols();
    const rowHeightPercentage = totalHeightPercentage / (Math.ceil(numParticipants / cols));
    return `${rowHeightPercentage}%`;
  }

  isLastRowWithFewerTiles(): boolean {
    const numParticipants = this.participantsList.length;
    const cols = this.calculateCols();
    const rows = Math.ceil(numParticipants / cols);
    const tilesInLastRow = numParticipants % cols;
    return tilesInLastRow !== 0 && rows > 1;
  }

}
