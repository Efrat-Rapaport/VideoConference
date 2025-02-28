import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTilesComponent } from './video-tiles.component';

describe('VideoTilesComponent', () => {
  let component: VideoTilesComponent;
  let fixture: ComponentFixture<VideoTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTilesComponent]
    });
    fixture = TestBed.createComponent(VideoTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
