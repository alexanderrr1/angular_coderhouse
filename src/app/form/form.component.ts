import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Alumno } from "../model/alumno";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() alumnos:any;

  constructor() {
  }

  subjects:any = [
    'Historia',
    'Matemática',
    'Literatura',
    'Informática',
  ]

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    subject: new FormControl('', Validators.required),
    calification: new FormControl('', Validators.required)
  })

  get name() { return this.registerForm.get('name')};
  get subject() { return this.registerForm.get('subject')};
  get calification() { return this.registerForm.get('calification')};
  get lastName() { return this.registerForm.get('lastName')};

  submitForm(form:Event) {
    form.preventDefault();
    const nuevoAlumno:Alumno = this.createAlumno(this.registerForm.value);
    this.alumnos.push(nuevoAlumno);
  }

  ngOnInit(): void {
  }

  createAlumno(data:any) {
    const lastId:any = this.alumnos[this.alumnos.length-1].id;
    const alumnoIngresado:Alumno = {
      id : lastId+1,
      nombre : data.name,
      apellido : data.lastName,
      materia : data.subject,
      nota : data.calification
    };
    return alumnoIngresado;
  }



}
