import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCoefficientComponent } from '../add-coefficient/add-coefficient.component';
import { AddProgramComponent } from '../add-program/add-program.component';
import { Program } from '../modal/Modal';
import { ProgramService } from '../service/program.service';

@Component({
  selector: 'app-find-program',
  templateUrl: './find-program.component.html',
  styleUrls: ['./find-program.component.css']
})
export class FindProgramComponent implements OnInit {
 program: Program = {} as Program;
 idProgram: number;

  constructor(private route: ActivatedRoute, private programService: ProgramService, private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idProgram = this.route.snapshot.params.idProgram;
        this.programService.findProgram(this.idProgram).subscribe(program => {
          this.program = program;
        })
      }
    )
  }

  ngOnInit(): void {
  }
  updateProgram(idProgram: number) {
    this.dialog.open(AddProgramComponent, {
      data: {idProgram},
      height: '320px',
      width: '400px',
    });
  }
  deleteProgram(idProgram: number) {
    if(confirm('Are you sure')) {
      this.programService.deleteProgram(idProgram).subscribe(() => {
        window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-subjects`)
      })
    }
  }
  addCoefficient(idProgram: number) {
    this.dialog.open(AddCoefficientComponent, {
      data: {idProgram},
      height: '320px',
      width: '400px',
    });
  }
}
