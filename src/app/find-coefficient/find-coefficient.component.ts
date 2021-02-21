import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CoefficientService } from '../service/coefficient.service';
import { Coefficient } from '../modal/Modal';
import { AddCoefficientComponent } from '../add-coefficient/add-coefficient.component';

@Component({
  selector: 'app-find-coefficient',
  templateUrl: './find-coefficient.component.html',
  styleUrls: ['./find-coefficient.component.css']
})
export class FindCoefficientComponent implements OnInit {
  coefficien: Coefficient = {} as Coefficient;
  idCoefficient: number;

  constructor(private route: ActivatedRoute, private coefficientService: CoefficientService, private dialog: MatDialog) {
    this.route.params.subscribe(
      params => {
        this.idCoefficient = this.route.snapshot.params.idCoefficient;
        this.coefficientService.findCoefficient(this.idCoefficient).subscribe(coefficien => {
          this.coefficien = coefficien;
        })
      }
    )
  }
  ngOnInit(): void {
  }
  deleteCoefficien(idCoefficient: number) {
   if(confirm('Are you sure')) {
     this.coefficientService.deleteCoefficient(idCoefficient).subscribe(() => {
      window.location.replace(`/find-school/ ${this.route.parent.snapshot.params.idSchool} /find-subjects`)
     })
   }
  }
  updateCoefficien(idCoefficient: number) {
    this.dialog.open(AddCoefficientComponent, {
      data: {idCoefficient},
      height: '320px',
      width: '400px',
    });
  }
}
