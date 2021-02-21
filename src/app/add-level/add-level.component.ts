import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from '../modal/Modal';
import { LevelService } from '../service/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {
  progressBar = false;
 level: Level = {} as Level;

  constructor( private levelService: LevelService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idLevel!=null) {
      this.levelService.findLevel(this.data.idLevel).subscribe(level => {
        this.level = level;
      })
    }
  }

  addLevel() {
    if(this.data.idLevel!=null) {
      this.levelService.editLevel(this.level, this.data.idLevel).subscribe(level => {
        this.level = level;
        window.location.reload();
      })
    } else {
      this.levelService.addLevel(this.level, this.data.idSchooling).subscribe(level => {
        this.level = level;
        window.location.reload();
      })
    }
  }

}
