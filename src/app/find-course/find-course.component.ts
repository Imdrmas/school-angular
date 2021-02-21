import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, Subject } from '../modal/Modal';
import { CourseService } from '../service/course.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-find-course',
  templateUrl: './find-course.component.html',
  styleUrls: ['./find-course.component.css']
})
export class FindCourseComponent implements OnInit {
  course: Course = {} as Course;
  subject: Subject = {} as Subject;
  idCourse: number;
  idSchool: number;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private dialog: MatDialog,
    private router: Router, private subjectService: SubjectService) {
    this.route.params.subscribe(
      params => {
        this.idSchool = this.route.parent.snapshot.params.idSchool;
        this.idCourse = this.route.snapshot.params.idCourse;
        this.courseService.findCourse(this.idCourse).subscribe(course => {
          this.course = course;
          this.subjectService.findSubjectForCourse(this.idCourse).subscribe(subject => {
            this.subject = subject;
          })
        })
      }
    )
  }

  ngOnInit(): void {
  }
  deleteCourse(idCourse: number, idSubject: number) {
    if(confirm('Are you sure')) {
      this.courseService.deleteCourse(idCourse, idSubject).subscribe(() => {
        window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-schoolings`)
      })
    }
  }

}
