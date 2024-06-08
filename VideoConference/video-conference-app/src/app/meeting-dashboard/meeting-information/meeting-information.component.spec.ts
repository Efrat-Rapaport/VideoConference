import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInformationComponent } from './meeting-information.component';

describe('MeetingInformationComponent', () => {
  let component: MeetingInformationComponent;
  let fixture: ComponentFixture<MeetingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingInformationComponent]
    });
    fixture = TestBed.createComponent(MeetingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
