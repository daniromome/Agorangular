import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgoraRESTService {

  headers = new HttpHeaders({

  });

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos() {
    return this.http.get('http://10.8.0.3:3000/alumnos');
  }

  getMaterias() {
    return this.http.get('http://10.8.0.3:3000/materias');
  }

  getPromedio() {
    return this.http.get('http://10.8.0.3:3000/promedio');
  }

  getAlumnoInfo(alumno: string) {
    return this.http.get('http://10.8.0.3:3000/alumnos/' + alumno);
  }

  postCrearAlumno(alumno: string) {
    return this.http.post('http://10.8.0.3:3000/alumnos/' + alumno, null );
  }

  postCalificarAlumno(alumno: string, materia: string, calificacion: string) {
    return this.http.post('http://10.8.0.3:3000/alumnos/' + alumno + '/' + materia + '/' + calificacion, null);
  }

}
