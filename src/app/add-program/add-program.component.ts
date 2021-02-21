import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Program } from '../modal/Modal';
import { ProgramService } from '../service/program.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  progressBar = false;
  program: Program = {} as Program;

  constructor(private programService: ProgramService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idProgram!=null) {
      this.programService.findProgram(this.data.idProgram).subscribe(program => {
        this.program = program;
      })
    }
  }

addProgram() {
  this.progressBar = true;
  if(this.data.idProgram!=null) {
   this.programService.editProgram(this.program, this.data.idProgram).subscribe(program => {
     this.program = program;
     window.location.reload();
   })
  } else {
    this.programService.addProgram(this.program, this.data.idSubject).subscribe(program => {
      this.program = program;
      window.location.reload();
    })
  }
}
}
