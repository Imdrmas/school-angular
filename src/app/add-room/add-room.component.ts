import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from '../modal/Modal';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  progressBar = false;
  room: Room = {} as Room;

  constructor(private roomService: RoomService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idRoom!=null) {
      this.roomService.findRoom(this.data.idRoom).subscribe(room => {
        this.room = room;
      })
    }
  }

  addRoom() {
    this.progressBar = true;
    if(this.data.idRoom!=null) {
       this.roomService.editRoom(this.room, this.data.idRoom).subscribe(room => {
         this.room = room;
         window.location.reload();
       })
    } else {
      this.roomService.addRoom(this.room, this.data.idSchool).subscribe(room => {
        this.room = room;
        window.location.reload();
      })
    }
  }
}
