import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindSchoolComponent } from './find-school/find-school.component';
import { DisplaySchoolComponent } from './display-school/display-school.component';
import { FindActivityComponent } from './find-activity/find-activity.component';
import { FindActivitiesComponent } from './find-activities/find-activities.component';
import { FindSchoolingsComponent } from './find-schoolings/find-schoolings.component';
import { FindSchoolingComponent } from './find-schooling/find-schooling.component';
import { FindRoomsComponent } from './find-rooms/find-rooms.component';
import { FindRoomComponent } from './find-room/find-room.component';
import { FindSubjectsComponent } from './find-subjects/find-subjects.component';
import { FindSubjectComponent } from './find-subject/find-subject.component';
import { FindProgramComponent } from './find-program/find-program.component';
import { FindCoefficientComponent } from './find-coefficient/find-coefficient.component';
import { FindExamsComponent } from './find-exams/find-exams.component';
import { FindExamComponent } from './find-exam/find-exam.component';
import { FindNoteComponent } from './find-note/find-note.component';
import { FindLevelComponent } from './find-level/find-level.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FindCourseComponent } from './find-course/find-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'find-school/:idSchool',
    component: FindSchoolComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'display-school/:idSchool',
        component: DisplaySchoolComponent
      },
      {
        path: 'find-activities',
        component: FindActivitiesComponent
      },
      {
        path: 'find-activity/:idActivity',
        component: FindActivityComponent
      },
      {
        path: 'find-schoolings',
        component: FindSchoolingsComponent
      },
      {
        path: 'find-schoolling/:idSchooling',
        component: FindSchoolingComponent
      },
      {
        path: 'find-rooms',
        component: FindRoomsComponent
      },
      {
        path: 'find-room/:idRoom',
        component: FindRoomComponent
      },
      {
        path: 'find-subjects',
        component: FindSubjectsComponent
      },
      {
        path: 'find-subject/:idSubject',
        component: FindSubjectComponent
      },
      {
        path: 'find-program/:idProgram',
        component: FindProgramComponent
      },
      {
        path: 'find-coefficient/:idCoefficient',
        component: FindCoefficientComponent
      },
      {
        path: 'find-exams',
        component: FindExamsComponent
      },
      {
        path: 'find-exam/:idExam',
        component: FindExamComponent
      },
      {
        path: 'find-note/:idNote',
        component: FindNoteComponent
      },
      {
        path: 'find-level/:idLevel',
        component: FindLevelComponent
      },
      {
        path: 'add-course/:idLevel',
        component: AddCourseComponent
      },
      {
        path: 'edit-course/:idCourse',
        component: AddCourseComponent
      },
      {
        path: 'find-course/:idCourse',
        component: FindCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
