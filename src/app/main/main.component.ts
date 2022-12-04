import { Component } from '@angular/core';
import { debounceTime } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  search = new FormControl('');
  filter: string = '';

  alumnos = [
    {
      nombre: 'Florencia',
      materia: 'Historia',
      nota: 5,
      aprobado: false,
    },
    {
      nombre: 'Facundo',
      materia: 'Matematica',
      nota: 10,
      aprobado: true,
    },
    {
      nombre: 'Alexander',
      materia: 'Literatura',
      nota: 6,
      aprobado: false,
    },
    {
      nombre: 'Leonardo',
      materia: 'Informática',
      nota: 8,
      aprobado: true,
    },
    {
      nombre: 'Nahuel',
      materia: 'Historia',
      nota: 7,
      aprobado: true,
    }
  ]

  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((name) => this.filterSearch(name as string));
  }

  filterSearch(value: string) {
    this.filter = value;
  }


}
