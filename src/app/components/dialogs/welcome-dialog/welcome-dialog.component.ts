import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css'],
})
export class WelcomeDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<WelcomeDialogComponent>
  ) {
    this.form = _formBuilder.group({
      userName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.form.updateValueAndValidity();
  }

  public saveDialog() {
    this.dialogRef.close(this.form.value);
  }
}
