import { Component } from '@angular/core';
import { debounceTime } from "rxjs";
import { FormControl } from "@angular/forms";
import { Alumno } from "../model/alumno";

// @ts-ignore
import alumnosData from '../alumnos.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  search = new FormControl('');
  filter: string = '';
  alumnos:Alumno[] = alumnosData;

  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((name) => this.filterSearch(name as string));
  }

  filterSearch(value: string) {
    this.filter = value;
  }

  deleteAlumno(id:number, alumnos:Alumno[]) {
    const alumnoSeleccionado:Alumno = alumnos.filter((value) => value.id == id)[0];
    const indexOfAlumnoSeleccionado:number = alumnos.indexOf(alumnoSeleccionado);
    alumnos.splice(indexOfAlumnoSeleccionado, 1);
  }


}
