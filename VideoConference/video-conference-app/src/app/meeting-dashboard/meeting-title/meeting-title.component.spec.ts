import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTitleComponent } from './meeting-title.component';

describe('MeetingTitleComponent', () => {
  let component: MeetingTitleComponent;
  let fixture: ComponentFixture<MeetingTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingTitleComponent]
    });
    fixture = TestBed.createComponent(MeetingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
