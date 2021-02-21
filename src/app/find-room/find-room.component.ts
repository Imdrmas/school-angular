import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddRoomComponent } from '../add-room/add-room.component';
import { Level, Room } from '../modal/Modal';
import { RoomService } from '../service/room.service';
import { AddLevelToRoomComponent } from '../add-level-to-room/add-level-to-room.component';
import { LevelService } from '../service/level.service';

@Component({
  selector: 'app-find-room',
  templateUrl: './find-room.component.html',
  styleUrls: ['./find-room.component.css']
})
export class FindRoomComponent implements OnInit {
  idRoom: number;
  room: Room = {} as Room;
  level: Level = {} as Level;

  constructor(private route: ActivatedRoute, private roomService: RoomService, private dialog: MatDialog,
    private levelService: LevelService) {
    this.route.params.subscribe(
      params => {
        this.idRoom = this.route.snapshot.params.idRoom;
        this.roomService.findRoom(this.idRoom).subscribe(data => {
          this.room = data;
          if(this.level!=null) {
          this.levelService.findLevelForRoom(this.idRoom).subscribe(level => {
              this.level = level;
          })
         }
        });
      }
    );
  }

  ngOnInit(): void {
  }
  deleteRoom(idRoom: number) {
    if (confirm('Are you sure')) {
      this.roomService.deleteRoom(idRoom).subscribe(() => {
        window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-rooms`)
      })
    }
  }
  updateRoom(idRoom: number) {
    this.dialog.open(AddRoomComponent, {
      data: { idRoom },
      height: '370px',
      width: '400px',
    });
  }
  addLevelToRoom(idRoom: number) {
    this.dialog.open(AddLevelToRoomComponent, {
      data: { idRoom },
      height: '240px',
      width: '400px',
    });
  }
  deleteLevelFromRoom(idRoom: number, idLevel: number) {
    if(confirm('Are you sure')){
      this.levelService.deleteLevelFromRoom(idRoom, idLevel).subscribe((data) => {
        window.location.reload();
       })
    }

  }
}
