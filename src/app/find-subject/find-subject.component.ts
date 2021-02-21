import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddSubjectComponent } from '../add-subject/add-subject.component';
import { Subject } from '../modal/Modal';
import { SubjectService } from '../service/subject.service';
import { AddProgramComponent } from '../add-program/add-program.component';
import { AddCoefficientComponent } from '../add-coefficient/add-coefficient.component';

@Component({
  selector: 'app-find-subject',
  templateUrl: './find-subject.component.html',
  styleUrls: ['./find-subject.component.css']
})
export class FindSubjectComponent implements OnInit {
  subject: Subject = {} as Subject;
  idSubject: number;

  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idSubject = this.route.snapshot.params.idSubject;
        this.subjectService.findSubject(this.idSubject).subscribe(subject => {
          this.subject = subject
        })
      }
    )
  }

  ngOnInit(): void {
  }
  deleteSubject(idSubject: number) {
    if(confirm('Are you sure')) {
      this.subjectService.deleteSubject(idSubject).subscribe(() => {
       window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-subjects`)
      })
    }
  }
  updateSubject(idSubject: number) {
    this.dialog.open(AddSubjectComponent, {
      data: {idSubject},
      height: '620px',
      width: '400px',
    });
  }
  addProgram(idSubject: number) {
    this.dialog.open(AddProgramComponent, {
      data: {idSubject},
      height: '320px',
      width: '400px',
    });
  }

}
