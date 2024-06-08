import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTileControlComponent } from './video-tile-control.component';

describe('VideoTileControlComponent', () => {
  let component: VideoTileControlComponent;
  let fixture: ComponentFixture<VideoTileControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTileControlComponent]
    });
    fixture = TestBed.createComponent(VideoTileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
