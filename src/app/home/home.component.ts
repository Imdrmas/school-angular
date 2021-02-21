import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSchoolComponent } from '../add-school/add-school.component';
import { School } from '../modal/Modal';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  schools: School[];

  constructor(private dialog: MatDialog, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.findSchools().subscribe((schools) => {
      this.schools = schools;
    });
  }
  addSchool() {
    const id = null;
    this.dialog.open(AddSchoolComponent, {
      data: {id},
      height: '580px',
      width: '400px',
    });
  }
}
