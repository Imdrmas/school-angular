import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../service/school.service';
import { ActivityService } from '../service/activity.service';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../service/subject.service';
import { ExamService } from '../service/exam.service';
import { RoomService } from '../service/room.service';
import { SchoolingService } from '../service/schooling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  schoolLength = 0;
  activityLength = 0;
  subjectLength = 0;
  examsLength = 0;
  roomLength = 0;
  schoolingLength = 0;

  constructor(private schoolService: SchoolService, private activityService: ActivityService,
    private route: ActivatedRoute, private subjectService: SubjectService, private examService: ExamService,
    private roomService: RoomService, private schoolingService: SchoolingService) { }

  ngOnInit(): void {
    const id = this.route.parent.snapshot.params.idSchool;

    this.schoolService.findSchools().subscribe(schools => {
      this.schoolLength = schools.length;
    })
    this.activityService.findActivitiesForSchool(id).subscribe(activities => {
      this.activityLength = activities.length;
    })
    this.subjectService.findAllSubjectsForSchool(id).subscribe(subjects => {
      this.subjectLength = subjects.length;
    })
    this.examService.findExamsForSchool(id).subscribe(exams => {
      this.examsLength = exams.length;
    })
    this.roomService.findRoomsForSchool(id).subscribe(rooms => {
      this.roomLength = rooms.length;
    })
    this.schoolingService.findSchoolingsForSchool(id).subscribe(schoolings => {
      this.schoolingLength = schoolings.length;
    })
  }

}
