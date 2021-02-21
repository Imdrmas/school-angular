import { Component, OnInit } from '@angular/core';
import { Activity } from '../modal/Modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../service/activity.service';
import { AddActivityComponent } from '../add-activity/add-activity.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-find-activity',
  templateUrl: './find-activity.component.html',
  styleUrls: ['./find-activity.component.css']
})
export class FindActivityComponent implements OnInit {
  activity: Activity = {} as Activity;
  idActivity: number;

  constructor(private route: ActivatedRoute, private activityService: ActivityService, private dialog: MatDialog,
    private router: Router) {
    this.route.params.subscribe(
      params => {
        this.idActivity = this.route.snapshot.params.idActivity;
        this.activityService.findActivity(this.idActivity).subscribe(activity => {
          this.activity = activity;
        })
      }
    )
  }

  ngOnInit(): void {
  }
  deleteActivity(idActivity: number) {
      if(confirm('Are you sure')) {
        this.activityService.deleteActivity(idActivity).subscribe(() => {
         window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-activities`)
        })
      }
  }

  updateActivity(idActivity: number) {
    this.dialog.open(AddActivityComponent, {
      data: {idActivity},
      height: '600px',
      width: '400px',
    });
  }
}
