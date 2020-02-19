import { Component, OnInit } from '@angular/core';
import { AgoraRESTService } from '../agora-rest.service';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoComponent } from '../alumno/alumno.component';
import { InformacionComponent } from '../informacion/informacion.component';

export interface DatosAlumno {
  nombre: string;
  calificacion: number;
  materias: object;
  materia: string;
}

export interface Transaccion {
  id: number;
  nombre: string;
  materia: string;
  calificacion: number;
}

export interface InfoAlumno {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: object;
  promedio: object;
  info: object;
  materias: object;

  dialogRef;

  materia: string;
  id: number;
  calificacion: number;
  cambios = [];
  cambio: Transaccion;

  constructor(
    private serve: AgoraRESTService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.serve.getAlumnos().subscribe((data: any[]) => {
      console.log(data);
      this.alumnos = data;
    });
    this.serve.getPromedio().subscribe((data: any[]) => {
      console.log(data);
      this.promedio = data;
    });
    this.serve.getMaterias().subscribe((data: any[]) => {
      console.log(data);
      this.materias = data;
    });
  }

  openGrader(id: number, nombre: string): void {
    console.log(id, name);
    this.id = id;
    this.dialogRef = this.dialog.open(AlumnoComponent, {
      width: '250px',
      data: { alumno: id, nombre, materias: this.materias }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cambio = {
        id: this.id,
        nombre: result.nombre,
        materia: result.materia,
        calificacion: result.calificacion
      };
      console.log(this.cambio);
      this.cambios.push(this.cambio);
    });
  }

  openInfo(id: number, nombre: string): void {
    console.log(id, name);
    this.dialogRef = this.dialog.open(InformacionComponent, {
      width: '250px',
      data: { id, nombre }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  applyChanges(alumno: string, materia: string, calificacion: number) {
    this.serve.postCalificarAlumno(alumno, materia, calificacion.toString()).subscribe((data: any[]) => {
      console.log(data);
      this.cambios.splice(this.cambios.findIndex(cambio => cambio.id === alumno), 1);
      this.serve.getPromedio().subscribe((prom: any[]) => {
        console.log(prom);
        this.promedio = prom;
      });
    });
  }

}
