import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Planeta } from '../../models/Planetas';

@Component({
  selector: 'app-planeta-form',
  templateUrl: './planeta-form.component.html',
  styleUrl: './planeta-form.component.css'
})
export class PlanetaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Planeta>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;

  planetaForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.planetaForm = new FormGroup({
      id: new FormControl(0),
      nomePlaneta: new FormControl('', [Validators.required]),
      gravidade: new FormControl('', [Validators.required]),
      rotacao: new FormControl('', [Validators.required]),
      temperatura: new FormControl('', [Validators.required])
    });
  }

  submit() {
    this.onSubmit.emit(this.planetaForm.value);
  }

}
