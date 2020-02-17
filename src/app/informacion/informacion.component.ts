import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoAlumno } from '../alumnos/alumnos.component';
import { AgoraRESTService } from '../agora-rest.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  info: object;

  constructor(
    private serve: AgoraRESTService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoAlumno,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.serve.getAlumnoInfo(this.data.id).subscribe((data: any[]) => {
      console.log(data);
      this.info = data;
    });
    console.log(this.data);
  }

}
