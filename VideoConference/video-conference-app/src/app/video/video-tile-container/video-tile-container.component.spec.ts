import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTileContainerComponent } from './video-tile-container.component';

describe('VideoTileContainerComponent', () => {
  let component: VideoTileContainerComponent;
  let fixture: ComponentFixture<VideoTileContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTileContainerComponent]
    });
    fixture = TestBed.createComponent(VideoTileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
