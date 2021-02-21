import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddNoteComponent } from '../add-note/add-note.component';
import { Level } from '../modal/Modal';
import { LevelService } from '../service/level.service';
import { AddLevelComponent } from '../add-level/add-level.component';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-find-level',
  templateUrl: './find-level.component.html',
  styleUrls: ['./find-level.component.css']
})
export class FindLevelComponent implements OnInit {
 level: Level = {} as Level;
 idLevel: number;
 idSchool: number;

  constructor(private levelService: LevelService, private route: ActivatedRoute, private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idSchool = this.route.parent.snapshot.params.idSchool;
        this.idLevel = this.route.snapshot.params.idLevel;
        this.levelService.findLevel(this.idLevel).subscribe(level => {
          this.level = level;
        })
      }
    )
   }

  ngOnInit(): void {

  }
  deleteLevel(idLevel: number) {
    if(confirm('Are you sure')) {
      this.levelService.deleteLevel(idLevel).subscribe(() => {
        window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-schoolings`)
      })
    }
  }
  updateLevel(idLevel: number) {
    this.dialog.open(AddLevelComponent, {
      data: {idLevel},
      height: '300px',
      width: '400px',
    });
  }
  addCourse(idLevel: number) {
    this.dialog.open(AddCourseComponent, {
      data: {idLevel},
      height: '500px',
      width: '400px',
    });
  }
}
