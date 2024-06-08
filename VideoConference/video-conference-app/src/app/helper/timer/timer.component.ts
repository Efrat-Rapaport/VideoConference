import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  seconds: number = 0;
  timer: any;
  timeString: string = '00:00:00';

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const hours = Math.floor(this.seconds / 3600);
    const minutes = Math.floor((this.seconds % 3600) / 60);
    const seconds = this.seconds % 60;

    this.timeString = this.pad(hours) + ':' + this.pad(minutes) + ':' + this.pad(seconds);
  }

  pad(num: number): string {
    return (num < 10 ? '0' : '') + num;
  }

}
