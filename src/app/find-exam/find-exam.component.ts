import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddExamComponent } from '../add-exam/add-exam.component';
import { Exam, Subject } from '../modal/Modal';
import { ExamService } from '../service/exam.service';
import { SubjectService } from '../service/subject.service';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-find-exam',
  templateUrl: './find-exam.component.html',
  styleUrls: ['./find-exam.component.css']
})
export class FindExamComponent implements OnInit {
 exam: Exam = {} as Exam;
 subject: Subject = {} as Subject;
 idExam: number;

  constructor(private route: ActivatedRoute, private examService: ExamService,
    private subjectService: SubjectService, private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idExam = this.route.snapshot.params.idExam;
        this.examService.findExam(this.idExam).subscribe(exam => {
           this.exam = exam;
           this.subjectService.findSubjectForExam(this.idExam).subscribe(subject => {
             this.subject = subject;
           })
         })
      }
    )
  }

  ngOnInit(): void {

  }

  deleteExam(idExam: number, idSubject) {
   if(confirm('Are you sure')) {
     this.examService.deleteExam(idExam, idSubject).subscribe(() => {
      window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-exams`)
     })
   }
  }
  updateExam(idExam: number) {
    this.dialog.open(AddExamComponent, {
      data: {idExam},
      height: '480px',
      width: '400px',
    });
  }
  addNote(idExam: number) {
    this.dialog.open(AddNoteComponent, {
      data: {idExam},
      height: '300px',
      width: '400px',
    });
  }
}
