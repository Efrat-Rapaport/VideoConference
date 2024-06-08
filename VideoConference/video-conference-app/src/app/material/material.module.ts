import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatSidenavModule, MatIconModule, MatGridListModule, MatListModule, MatButtonModule, MatBadgeModule, MatFormFieldModule
  ],
  exports: [MatSidenavModule, MatIconModule, MatGridListModule, MatListModule, MatButtonModule, MatBadgeModule, MatFormFieldModule]
})
export class MaterialModule { }
