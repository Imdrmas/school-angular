import { Component, Inject, OnInit } from '@angular/core';
import { Coefficient } from '../modal/Modal';
import { CoefficientService } from '../service/coefficient.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-coefficient',
  templateUrl: './add-coefficient.component.html',
  styleUrls: ['./add-coefficient.component.css']
})
export class AddCoefficientComponent implements OnInit {
  progressBar = false;
  coefficient: Coefficient = {} as Coefficient;

  constructor(private coefficientService: CoefficientService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data.idCoefficient!=null) {
   this.coefficientService.findCoefficient(this.data.idCoefficient).subscribe(coefficient => {
     this.coefficient = coefficient;
   })
    }
  }
  addCoefficient() {
    this.progressBar = true;
    if(this.data.idCoefficient!=null) {
      this.coefficientService.editCoefficient(this.coefficient, this.data.idCoefficient).subscribe(coefficient => {
        this.coefficient = coefficient;
        window.location.reload();
      })
    } else {
      this.coefficientService.addCoefficient(this.coefficient, this.data.idProgram).subscribe(coefficient => {
        this.coefficient = coefficient;
        window.location.reload();
      })
    }
  }
}
