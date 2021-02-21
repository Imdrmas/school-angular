import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSchoolingComponent } from '../add-schooling/add-schooling.component';
import { Schooling } from '../modal/Modal';
import { SchoolingService } from '../service/schooling.service';
import { AddLevelComponent } from '../add-level/add-level.component';

@Component({
  selector: 'app-find-schooling',
  templateUrl: './find-schooling.component.html',
  styleUrls: ['./find-schooling.component.css']
})
export class FindSchoolingComponent implements OnInit {
  schooling: Schooling = {} as Schooling;
  idSchooling: number;

  constructor(private route: ActivatedRoute, private schoolingService: SchoolingService, private dialog: MatDialog,
    private router: Router) {
    this.route.params.subscribe(
      params => {
        this.idSchooling = this.route.snapshot.params.idSchooling;
        this.schoolingService.findSchooling(this.idSchooling).subscribe(schooling => {
          this.schooling = schooling;
        })
      }
    )
  }

  ngOnInit(): void {
  }
  deleteSchooling(idSchooling: number) {
   if(confirm('Are you sure')) {
     this.schoolingService.deleteSchooling(idSchooling).subscribe(() => {
      window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-schoolings`)
     })
   }
  }
  updateSchooling(idSchooling: number) {
    this.dialog.open(AddSchoolingComponent, {
      data: {idSchooling},
      height: '300px',
      width: '400px',
    });
  }
  addLevel(idSchooling: number) {
    this.dialog.open(AddLevelComponent, {
      data: {idSchooling},
      height: '300px',
      width: '400px',
    });
  }
}
