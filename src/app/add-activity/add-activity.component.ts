import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from '../modal/Modal';
import { ActivityService } from '../service/activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
})
export class AddActivityComponent implements OnInit {
  progressBar = false;
  activity: Activity = {} as Activity;
  weekDay: any = {};

  constructor(
    private activityService: ActivityService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    if (this.data.idActivity) {
      this.activityService
        .findActivity(this.data.idActivity)
        .subscribe((activity) => {
          this.activity = activity;
        });
    }
  }
  onSelectedDay() {
    this.activity.day = this.weekDay;
  }
  onDateTime(e) {
    this.activity.date = e.target.value;
    console.log(e.target.value)
  }
  addActivity() {
    this.progressBar = true;
    if (this.data.idActivity) {
      this.activityService
        .editActivity(this.activity, this.data.idActivity)
        .subscribe((activity) => {
          this.activity = activity;
          window.location.reload();
        });
    } else {
      this.activityService
        .addActivity(this.activity, this.data.idSchool)
        .subscribe((activity) => {
          this.activity = activity;
          window.location.reload();
        });
    }
  }
}
