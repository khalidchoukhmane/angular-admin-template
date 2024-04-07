import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fp-delete-dialog',
  templateUrl: './fp-delete-dialog.component.html',
  styleUrl: './fp-delete-dialog.component.css'
})
export class FpDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FpDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmDelete(): void {
    this.dialogRef.close(true); // Pass true to indicate deletion
  }

  cancel(): void {
    this.dialogRef.close(false); // Pass false to indicate cancellation
  }
}
