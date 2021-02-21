import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exam, Subject } from '../modal/Modal';
import { ExamService } from '../service/exam.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  progressBar = false;
  exam: Exam = {} as Exam;
  idSubject: number;
  subjects: Subject[];
  subject: Subject = {} as Subject;

  constructor(private examService: ExamService, private subjectService: SubjectService,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idExam!=null) {
      this.examService.findExam(this.data.idExam).subscribe(exam => {
        this.exam = exam;
        this.subjectService.findSubjectForExam(this.data.idExam).subscribe(subject => {
          this.subject = subject;
        })
      })
    }
    this.subjectService.findAllSubjectsForSchool(this.data.idSchool).subscribe(subjects => {
      this.subjects = subjects;
    })
  }

  onSelecSubject(e) {
    this.idSubject = e.target.value;
    console.log(this.idSubject);
 }
  onDateTime(e) {
    this.exam.date = e.target.value;
  }
  addExam() {
    if(this.data.idExam!=null) {
     this.examService.editExam(this.exam, this.data.idExam).subscribe(exam => {
       this.exam = exam;
       window.location.reload();
     })
    } else {
      this.examService.addExam(this.exam, this.data.idSchool, this.idSubject).subscribe(exam => {
        this.exam = exam;
        window.location.reload();
      })
    }
  }
}
