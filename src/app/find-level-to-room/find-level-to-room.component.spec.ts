import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLevelToRoomComponent } from './find-level-to-room.component';

describe('FindLevelToRoomComponent', () => {
  let component: FindLevelToRoomComponent;
  let fixture: ComponentFixture<FindLevelToRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLevelToRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLevelToRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
