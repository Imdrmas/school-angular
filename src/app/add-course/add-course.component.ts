import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course, Subject } from '../modal/Modal';
import { CourseService } from '../service/course.service';
import { SubjectService } from '../service/subject.service';
import { SchoolService } from '../service/school.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  progressBar = false;
  course: Course = {} as Course;
  subject: Subject = {} as Subject;
  subjects: Subject[];
  idSubject: number;
  idSchool: number;
  idCourse: number;
  idLevel: number;

  constructor(private courseService: CourseService,
  private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idLevel = this.route.snapshot.params.idLevel;
    this.idCourse = this.route.snapshot.params.idCourse;
    this.idSchool = this.route.parent.snapshot.params.idSchool;
    if(this.idCourse!=null) {
      this.courseService.findCourse(this.idCourse).subscribe(course => {
        this.course = course;
        this.subjectService.findSubjectForCourse(this.idCourse).subscribe(subject => {
          this.subject = subject;
        })
      })
    }
    this.subjectService.findAllSubjectsForSchool(this.idSchool).subscribe(subjects => {
      this.subjects = subjects;
    })
  }
  onSelecSubject(e) {
    this.idSubject = e.target.value;
 }
  onDateTime(e) {
    this.course.date = e.target.value;
  }

  addCourse() {
   this.progressBar = true;
   if(this.idCourse!=null) {
    this.courseService.editCourse(this.course, this.idCourse, this.idSubject).subscribe(course => {
      this.course = course;
      window.location.reload();
    })
  } else {
    this.courseService.addCourse(this.course, this.idLevel, this.idSubject).subscribe(course => {
      this.course = course;
      window.location.reload();
    })
  }
  }
}
