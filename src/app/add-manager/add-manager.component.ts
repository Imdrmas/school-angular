import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Manager } from '../modal/Modal';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  progressBar = false;
  manager: Manager = {} as Manager;

  constructor(private managerService: ManagerService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idManager!=null) {
      this.managerService.findManager(this.data.idManager).subscribe((manager) => {
        this.manager = manager;
      })
    }
  }
addManager() {
  this.progressBar = true;
  if(this.data.idManager!=null) {
    this.managerService.editManager(this.manager, this.data.idManager).subscribe((manager) => {
      this.manager = manager;
      window.location.reload();
    })
  } else {
    this.managerService.addManager(this.manager, this.data.id).subscribe((manager) => {
      this.manager = manager;
      window.location.reload();
    })
  }
}

}
