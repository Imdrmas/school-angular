import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from '../modal/Modal';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css'],
})
export class AddSchoolComponent implements OnInit {
  progressBar = false;
  school: School = {} as School;

  constructor(private schoolService: SchoolService, @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    if (this.data.id != null) {
      this.schoolService.findSchool(this.data.id).subscribe((school) => {
        this.school = school;
      });
    }
  }
  addSchool() {
    this.progressBar = true;
    if (this.data.id != null) {
          this.schoolService.editSchool(this.school, this.data.id).subscribe((school) => {
          this.school = school;
          window.location.reload();
        });
    } else {
      this.schoolService.addSchool(this.school).subscribe((school) => {
        this.school = school;
        window.location.reload();
      });
    }
  }
}
