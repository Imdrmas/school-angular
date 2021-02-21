import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from '../modal/Modal';
import { LevelService } from '../service/level.service';

@Component({
  selector: 'app-add-level-to-room',
  templateUrl: './add-level-to-room.component.html',
  styleUrls: ['./add-level-to-room.component.css']
})
export class AddLevelToRoomComponent implements OnInit {
  progressBar = false;
  levels: Level[];
  idLevel: number;

  constructor(private levelService: LevelService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.levelService.findLevels().subscribe(levels => {
      this.levels = levels;
    })
  }
  onSelecLevel(e) {
   this.idLevel = e.target.value;
   this.levelService.addLevelToRoom(this.data.idRoom, this.idLevel).subscribe(() => {
     window.location.reload();
   })
  }
  cancel() {
    window.location.reload();
  }
}
