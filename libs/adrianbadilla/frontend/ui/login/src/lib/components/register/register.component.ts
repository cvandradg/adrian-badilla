import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterStore } from './register.store';
import { Subject, map, combineLatest } from 'rxjs';
import { firebaseAuthHelper } from '@classes/firebaseAuthHelper';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    COMPONENTS,
    MODULES,
  ],
  providers: [RegisterStore],
})
export class RegisterComponent extends firebaseAuthHelper {
  readonly registerStore = inject(RegisterStore);

  isPassStrong$ = new Subject<boolean>();

  isValidUser$ = this.loginInputForm.valueChanges.pipe(
    map(() => !this.loginInputForm.controls.user.invalid)
  );

  enableButton$ = combineLatest([this.isValidUser$, this.isPassStrong$]).pipe(
    map(([isValidUser, isPassStrong]) => isValidUser && isPassStrong)
  );
}
