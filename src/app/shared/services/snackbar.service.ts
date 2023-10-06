import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar:MatSnackBar) { }

  openSnackBar(message: string, action: string = "Ok") {
    this._snackBar.open(message, action,{
      horizontalPosition:'left',
      verticalPosition:'top'
    });
  }
}
