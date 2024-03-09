import { Component, Inject, OnInit } from '@angular/core';
import { PlanetaService } from '../../services/planeta.service';
import { Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Planeta } from '../../models/Planetas';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {

  inputdata: any;
  planeta!: Planeta

  constructor(
    private planetaService: PlanetaService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
  ) { }

  ngOnInit(): void {
    this.inputdata = this.data;
    this.planetaService.GetPlaneta(this.inputdata.id).subscribe((data) => {
      // this.planeta = planeta;
      this.planeta = data;
    });
  }


  Excluir() {
    this.planetaService.ExcluirPlaneta(this.inputdata.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar() {
    this.ref.close();
  }

}
