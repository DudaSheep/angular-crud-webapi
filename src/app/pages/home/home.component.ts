import { Component, OnInit } from '@angular/core';
import { PlanetaService } from '../../services/planeta.service';
import { Planeta } from '../../models/Planetas';
import { HtmlParser } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  planetas: Planeta[] = [];
  planetasGeral: Planeta[] = [];

  colunas = ['Nome', 'Periodo de Rotação', 'Gravidade', 'Temperatura', 'Acoes', 'Excluir']

  constructor(private planetaService: PlanetaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.planetaService.GetPlanetas().subscribe(data => {
      const dados = data;
      dados.map((item) => {
        console.log(item)
      })

      this.planetas = dados;
      this.planetasGeral = dados;

    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.planetas = this.planetasGeral.filter(planeta => {
      return planeta.nomePlaneta.toLowerCase().includes(value);
    })
  }

  OpenDialog(id: number) {
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }

    });
  }

}
