import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddActivityComponent } from '../add-activity/add-activity.component';
import { AddManagerComponent } from '../add-manager/add-manager.component';
import { School, Manager } from '../modal/Modal';
import { ManagerService } from '../service/manager.service';
import { SchoolService } from '../service/school.service';
import { AddSchoolingComponent } from '../add-schooling/add-schooling.component';
import { AddRoomComponent } from '../add-room/add-room.component';
import { AddSubjectComponent } from '../add-subject/add-subject.component';
import { AddExamComponent } from '../add-exam/add-exam.component';

@Component({
  selector: 'app-display-school',
  templateUrl: './display-school.component.html',
  styleUrls: ['./display-school.component.css']
})
export class DisplaySchoolComponent implements OnInit {
  school: School = {} as School;
  manager: Manager = {} as Manager;
  idSchool: number;

  constructor(private route: ActivatedRoute, private schoolService: SchoolService, private dialog: MatDialog,
    private managerService: ManagerService) {
    this.route.params.subscribe(
      params => {
        this.idSchool = this.route.snapshot.params.idSchool;
        this.schoolService.findSchool(this.idSchool).subscribe((school) => {
          this.school = school;
           if(this.manager!=null) {
            this.managerService.findManagerForSchool(this.idSchool).subscribe((manager) => {
              this.manager = manager
            })
           }
        })

      }
    )
   }

  ngOnInit(): void {

  }

  addManager(id: number) {
    this.dialog.open(AddManagerComponent, {
      data: {id},
      height: '320px',
      width: '400px',
    });
  }
  editManager(idManager: number) {
    this.dialog.open(AddManagerComponent, {
      data: {idManager},
      height: '320px',
      width: '400px',
    });
  }
  deleteManager(idManager: number, idSchool: number) {
    if(confirm('Are you sur')) {
      this.managerService.deleteManager(idManager, idSchool).subscribe(() => {
       window.location.reload();
      })
    }
  }
  addActivity(idSchool: number) {
    this.dialog.open(AddActivityComponent, {
      data: {idSchool},
      height: '600px',
      width: '400px',
    });
  }
  addSchoolling(idSchool: number) {
    this.dialog.open(AddSchoolingComponent, {
      data: {idSchool},
      height: '300px',
      width: '400px',
    });
  }
  addRoom(idSchool: number) {
    this.dialog.open(AddRoomComponent, {
      data: {idSchool},
      height: '370px',
      width: '400px',
    });
  }
  addSubject(idSchool: number) {
    this.dialog.open(AddSubjectComponent, {
      data: {idSchool},
      height: '620px',
      width: '400px',
    });
  }
  addExam(idSchool: number) {
    this.dialog.open(AddExamComponent, {
      data: {idSchool},
      height: '480px',
      width: '400px',
    });
  }
}
