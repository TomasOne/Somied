import { Component, Inject, OnInit } from '@angular/core';
import { Driver } from '../services/Driver';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})

export class EditDriverComponent implements OnInit {

  public driver: Driver = new Driver();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private requestService: RequestService, private dialogRef: MatDialogRef<EditDriverComponent>) { }
  
  ngOnInit(): void {

    this.driver = this.data;
  }

  public editDriver() {

    this.requestService.editDriver(this.driver.id!, this.driver).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error) => alert(error)
    })
  }

  public closeDialog() {
    this.dialogRef.close(false);
  }
}