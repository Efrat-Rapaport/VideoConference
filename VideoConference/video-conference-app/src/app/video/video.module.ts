import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { VideoTileControlComponent } from './video-tile-control/video-tile-control.component';
import { MaterialModule } from '../material/material.module';
import { VideoTilesComponent } from './video-tiles/video-tiles.component';
import { VideoTileContainerComponent } from './video-tile-container/video-tile-container.component';
import { HelperModule } from '../helper/helper.module';

@NgModule({
  declarations: [
    VideoGalleryComponent,
    VideoTileControlComponent,
    VideoTilesComponent,
    VideoTileContainerComponent
  ],
  imports: [
    CommonModule, MaterialModule, HelperModule
  ],
  exports: [VideoGalleryComponent]
})
export class VideoModule { }
