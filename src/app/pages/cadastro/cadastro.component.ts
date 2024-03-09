import { Component } from '@angular/core';
import { Planeta } from '../../models/Planetas';
import { PlanetaService } from '../../services/planeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Planeta"

  constructor(private planetaService: PlanetaService, private router: Router) { }

  createPlaneta(planeta: Planeta) {
    this.planetaService.CreatePlaneta(planeta).subscribe((data) => {
      // console.log(data)
      this.router.navigate(['/'])
    });
  }
}
