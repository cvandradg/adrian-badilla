import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterStore } from './register.store';
import { Subject, map, combineLatest } from 'rxjs';
import { provideComponentStore } from '@ngrx/component-store';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, COMPONENTS, MODULES],
  providers: [provideComponentStore(RegisterStore)],
})
export class RegisterComponent extends BaseComponent {
  readonly registerStore = inject(RegisterStore);

  isPassStrong$ = new Subject<boolean>();

  isValidUser$ = this.loginInputForm.valueChanges.pipe(
    map(() => !this.loginInputForm.controls.user.invalid)
  );

  enableButton$ = combineLatest([this.isValidUser$, this.isPassStrong$]).pipe(
    map(([isValidUser, isPassStrong]) => isValidUser && isPassStrong)
  );
}
