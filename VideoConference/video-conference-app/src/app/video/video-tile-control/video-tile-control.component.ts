import { Component } from '@angular/core';

@Component({
  selector: 'app-video-tile-control',
  templateUrl: './video-tile-control.component.html',
  styleUrls: ['./video-tile-control.component.scss']
})
export class VideoTileControlComponent {

  constructor() {

  }

  changeCameraMode() {
    console.log("click on camera")
  }
  changeMicMode() {
    console.log("click on mic")
  }
  shareScreen() {
    console.log("click on share")
  }

}
