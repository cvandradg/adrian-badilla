import { map, pipe } from 'rxjs';
import { emailVerified } from '@angular/fire/auth-guard';
import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../dialogs/confirmation-dialog/confirmation-dialog.component';
import { AddIngredientDialogComponent } from '../dialogs/add-ingredient-dialog/add-ingredient-dialog.component';

export { debounce } from '../decorators/debounce.decorator';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

}


export const unverifiedTo = (redirect: string[]) =>
  pipe(
    emailVerified,
    map((emailVerified) => emailVerified || redirect)
  );

export const verifiedTo = (redirect: string[]) =>
  pipe(
    emailVerified,
    map((emailVerified) => !emailVerified || redirect)
  );

export const redirectLoggedIn = () => verifiedTo(['dashboard']);
export const redirectUnauthorized = () => unverifiedTo(['']);
