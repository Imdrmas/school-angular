import { Component, Inject, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Subject } from '../modal/Modal';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  progressBar = false;
  subject: Subject = {} as Subject;
  public arrayColors: any = {
    color1: '#f8c291',
    color2: '#d1f28e',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  color1: '#d1f28e';
  public selectedColor = 'color2';

  constructor(private subjectService: SubjectService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idSubject!=null) {
      this.subjectService.findSubject(this.data.idSubject).subscribe(subject => {
        this.subject = subject;
      })
    }
  }
  updateColor(event) {
    this.color1 = event;
    this.subject.color = this.color1;
   }
  addMatter() {
    this.progressBar = true;
    if(this.data.idSubject!=null) {
    this.subjectService.editSubject(this.subject, this.data.idSubject).subscribe(subject => {
      this.subject = subject;
      window.location.reload();
    })
    } else {
      this.subjectService.addSubject(this.subject, this.data.idSchool).subscribe(subject => {
        this.subject = subject;
        window.location.reload();
      })
    }
  }
}
