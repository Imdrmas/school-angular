import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Schooling } from '../modal/Modal';
import { SchoolingService } from '../service/schooling.service';

@Component({
  selector: 'app-add-schooling',
  templateUrl: './add-schooling.component.html',
  styleUrls: ['./add-schooling.component.css']
})
export class AddSchoolingComponent implements OnInit {
  progressBar = false;
  schooling: Schooling = {} as Schooling;

  constructor(private schoolingService: SchoolingService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idSchooling!=null) {
     this.schoolingService.findSchooling(this.data.idSchooling).subscribe(schooling => {
       this.schooling = schooling;
     })
    }
  }
  addSchoolling() {
    this.progressBar = true;
    if(this.data.idSchooling!=null) {
      this.schoolingService.editSchooling(this.schooling, this.data.idSchooling).subscribe(schooling => {
        this.schooling = schooling;
        window.location.reload();
      })
    } else {
      this.schoolingService.addSchooling(this.schooling, this.data.idSchool).subscribe(schooling => {
        this.schooling = schooling;
        window.location.reload();
      })
    }
  }
}
