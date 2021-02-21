import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { School } from '../modal/Modal';
import { SchoolService } from './school.service';

export class NodeAction {
  linkActive: string;
  url: string;
  title: string;
}
export class ApplicationItemNode {
  children: ApplicationItemNode[] = [];
  name: string;
  id: number;
  clazz: string;
  actions: NodeAction[] = [];
  title: string;
  routerLink: any;
}
export class ApplicationItemFlatNode {
  id: number;
  item: string;
  clazz: string;
  level: number;
  name: string;
  expandable: boolean;
  actions: NodeAction[] = [];
  title: string;
  routerLink: any;
}

@Injectable({
  providedIn: 'root'
})
export class TreeApplicationService {
  idSchool: any;
  applicationData = new BehaviorSubject<ApplicationItemNode[]>([]);
  applicationState = new BehaviorSubject<School>({} as School);

  constructor(private route: ActivatedRoute, private schoolService: SchoolService) {
    this.initialize();
  }


  initialize() {
   this.idSchool = this.route.snapshot.params.idSchool;
    this.applicationState.subscribe(() => {
      this.buildFileTree(0).subscribe(value => {
        this.applicationData.next(value);
      });
    });
    this.buildFileTree(0).subscribe(value => {
      this.applicationData.next(value);
    });
  }
  get data(): ApplicationItemNode[] {
    return this.applicationData.value;
  }

  buildFileTree(level: number): Observable<ApplicationItemNode[]>  {
    const nodes: ApplicationItemNode[] = [];
    return new Observable((observer) => {
      return this.schoolService.findSchool(this.idSchool).subscribe(school => {

        const activityRoot = new ApplicationItemNode();
        activityRoot.name = 'Activities';
        activityRoot.title = 'More details';
        activityRoot.clazz = 'fas fa-swimmer';
        activityRoot.routerLink = '/find-school/' + school.id + '/find-activities';
        nodes.push(activityRoot);

        if (school.activities.length > 0) {
          school.activities.forEach((activity) => {
            const activityNodeRoot = new ApplicationItemNode();
            activityNodeRoot.name = 'Activity ' + activity.type;
            activityNodeRoot.title = 'Level details';
            activityNodeRoot.clazz = 'fas fa-swimmer';
            activityNodeRoot.routerLink = '/find-school/' + school.id +  '/find-activity/' + activity.id;
            activityRoot.children.push(activityNodeRoot);
          });
        }
        const SubjectRoot = new ApplicationItemNode();
        SubjectRoot.name = 'Subjects';
        SubjectRoot.title = 'More details';
        SubjectRoot.clazz = 'far fa-copy';
        SubjectRoot.routerLink = '/find-school/' + school.id + '/find-subjects';
        nodes.push(SubjectRoot);

        if (school.subjects.length > 0 && Array.isArray(school.subjects)) {
              school.subjects.forEach((subject) => {
              const subjectNodeRoot = new ApplicationItemNode();
              subjectNodeRoot.name = subject.name;
              subjectNodeRoot.title = 'Parent details';
              subjectNodeRoot.clazz = 'far fa-copy';
              subjectNodeRoot.routerLink = '/find-school/' + school.id + '/find-subject/' + subject.id;
              SubjectRoot.children.push(subjectNodeRoot);

              if (subject.programs.length > 0) {
                subject.programs.forEach((program) => {
                    const programNodeRoot = new ApplicationItemNode();
                    programNodeRoot.name = program.name;;
                    programNodeRoot.clazz = 'fas fa-project-diagram';
                    programNodeRoot.routerLink  = '/find-school/' + school.id + '/find-program/' + program.id;
                    subjectNodeRoot.children.push(programNodeRoot);

                    if (program.coefficients.length > 0) {
                      program.coefficients.forEach((coefficient) => {
                        const coefficientNodeRoot = new ApplicationItemNode();
                        coefficientNodeRoot.name = 'Coefficient = (' + coefficient.grade + ')';
                        coefficientNodeRoot.clazz = 'fas fa-not-equal';
                        coefficientNodeRoot.routerLink  = '/find-school/' + school.id + '/find-coefficient/' + coefficient.id;
                        programNodeRoot.children.push(coefficientNodeRoot);
                      });
                    }
                  });
                }
            });
          }
          const examRoot = new ApplicationItemNode();
          examRoot.name = 'Exams';
          examRoot.title = 'More details';
          examRoot.clazz = 'fas fa-book-open';
          examRoot.routerLink = '/find-school/' + school.id + '/find-exams';
          nodes.push(examRoot);

          if (school.exams.length > 0) {
            school.exams.forEach((exam) => {
              const examNodeRoot = new ApplicationItemNode();
              examNodeRoot.name = 'Date: ' + exam.date;
              examNodeRoot.title = 'Level details';
              examNodeRoot.clazz = 'fas fa-book-open';
              examNodeRoot.routerLink = '/find-school/' + school.id + '/find-exam/' + exam.id;
              examRoot.children.push(examNodeRoot);

              if(exam.notes.length > 0) {
                  exam.notes.forEach((note, index) => {
                  const noteNodeRoot = new ApplicationItemNode();
                  const noteLength = index + 1;
                  noteNodeRoot.name = 'Note ' + noteLength;
                  noteNodeRoot.clazz = 'fas fa-book';
                  noteNodeRoot.routerLink  = '/find-school/' + school.id + '/find-note/' + note.id;
                  examNodeRoot.children.push(noteNodeRoot);
                });
              }

            });
          }
        const roomRoot = new ApplicationItemNode();
        roomRoot.name = 'Rooms';
        roomRoot.title = 'More details';
        roomRoot.clazz = 'fas fa-university';
        roomRoot.routerLink = '/find-school/' + school.id + '/find-rooms';
        nodes.push(roomRoot);

        if (school.rooms.length > 0) {
          school.rooms.forEach((room) => {
            const roomNodeRoot = new ApplicationItemNode();
            roomNodeRoot.name = 'Room ' + room.code;
            roomNodeRoot.title = 'Level details';
            roomNodeRoot.clazz = 'fas fa-university';
            roomNodeRoot.routerLink = '/find-school/' + school.id + '/find-room/' + room.id;
            roomRoot.children.push(roomNodeRoot);
          });
        }

        const yearRoot = new ApplicationItemNode();
        yearRoot.name = 'Schoolings';
        yearRoot.title = 'More details';
        yearRoot.clazz = 'fas fa-calendar-alt';
        yearRoot.routerLink = '/find-school/' + school.id + '/find-schoolings';
        nodes.push(yearRoot);

        if (school.schoolings.length > 0) {
          school.schoolings.forEach((schooling) => {
            const schoolingNodeRoot = new ApplicationItemNode();
            schoolingNodeRoot.name = 'Year ' + schooling.year;
            schoolingNodeRoot.title = 'Year details';
            schoolingNodeRoot.clazz = 'fas fa-calendar-alt';
            schoolingNodeRoot.routerLink = '/find-school/' + school.id + '/find-schoolling/' + schooling.id;
            yearRoot.children.push(schoolingNodeRoot);

            if (schooling.levels.length > 0) {
              schooling.levels.forEach((level) => {
                const levelNodeRoot = new ApplicationItemNode();
                levelNodeRoot.name = level.label;
                levelNodeRoot.title = 'More details';
                levelNodeRoot.clazz = 'fas fa-swatchbook';
                levelNodeRoot.routerLink = '/find-school/' + school.id + '/find-level/' + level.id;
                schoolingNodeRoot.children.push(levelNodeRoot);

                if(level.courses.length > 0) {
                  level.courses.forEach((course, index) => {
                      const courseNodeRoot = new ApplicationItemNode();
                      const courseLength = index + 1;
                      courseNodeRoot.name = 'Course: ' + courseLength;
                      courseNodeRoot.title = 'More details';
                      courseNodeRoot.clazz = 'fas fa-atlas';
                      courseNodeRoot.routerLink = '/find-school/' + school.id +  '/find-course/' + course.id;
                      levelNodeRoot.children.push(courseNodeRoot);

                  });
                }
              });
            }
          });
        }

        observer.next(nodes);
      })
    });
  }
}
