import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosAlumno } from '../alumnos/alumnos.component';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosAlumno,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (this.data.calificacion <= 10 && this.data.calificacion >= 0) {
      this.dialogRef.close(this.data);
    } else {
      this.snackBar.open('El valor debe estar entre 0 y 10');
    }
  }

  ngOnInit() {
  }

}
