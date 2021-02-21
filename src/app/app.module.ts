import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddSchoolComponent } from './add-school/add-school.component';
import { FindSchoolComponent } from './find-school/find-school.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { DisplaySchoolComponent } from './display-school/display-school.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { FindActivityComponent } from './find-activity/find-activity.component';
import { FindActivitiesComponent } from './find-activities/find-activities.component';
import { AddSchoolingComponent } from './add-schooling/add-schooling.component';
import { FindSchoolingsComponent } from './find-schoolings/find-schoolings.component';
import { FindSchoolingComponent } from './find-schooling/find-schooling.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FindRoomsComponent } from './find-rooms/find-rooms.component';
import { FindRoomComponent } from './find-room/find-room.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FindSubjectsComponent } from './find-subjects/find-subjects.component';
import { FindSubjectComponent } from './find-subject/find-subject.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { FindProgramComponent } from './find-program/find-program.component';
import { AddCoefficientComponent } from './add-coefficient/add-coefficient.component';
import { FindCoefficientComponent } from './find-coefficient/find-coefficient.component';
import { FindExamsComponent } from './find-exams/find-exams.component';
import { FindExamComponent } from './find-exam/find-exam.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { FindNoteComponent } from './find-note/find-note.component';
import { AddLevelComponent } from './add-level/add-level.component';
import { FindLevelComponent } from './find-level/find-level.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FindCourseComponent } from './find-course/find-course.component';
import { AddLevelToRoomComponent } from './add-level-to-room/add-level-to-room.component';
import { FindLevelToRoomComponent } from './find-level-to-room/find-level-to-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSchoolComponent,
    FindSchoolComponent,
    AddManagerComponent,
    DisplaySchoolComponent,
    AddActivityComponent,
    FindActivityComponent,
    FindActivitiesComponent,
    AddSchoolingComponent,
    FindSchoolingsComponent,
    FindSchoolingComponent,
    AddExamComponent,
    AddRoomComponent,
    FindRoomsComponent,
    FindRoomComponent,
    AddSubjectComponent,
    FindSubjectsComponent,
    FindSubjectComponent,
    AddProgramComponent,
    FindProgramComponent,
    AddCoefficientComponent,
    FindCoefficientComponent,
    FindExamsComponent,
    FindExamComponent,
    AddNoteComponent,
    FindNoteComponent,
    AddLevelComponent,
    FindLevelComponent,
    AddCourseComponent,
    FindCourseComponent,
    AddLevelToRoomComponent,
    FindLevelToRoomComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
