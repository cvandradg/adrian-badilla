import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { combineLatest, map, Subject } from 'rxjs';
import { firebaseAuthHelper } from '@classes/firebaseAuthHelper';
import { RequestPassResetStore } from './request-pass-reset.store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { StrengthMeterComponent } from '@adrianbadilla/shared/components/strength-meter/strength-meter.component';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';

@Component({
  selector: 'adrianbadilla-request-pass-reset',
  templateUrl: './request-pass-reset.component.html',
  styleUrls: ['./request-pass-reset.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, StrengthMeterComponent, MODULES, COMPONENTS],
  providers: [provideComponentStore(RequestPassResetStore)],
})
export class RequestPassResetComponent extends firebaseAuthHelper {
  compStore = inject(RequestPassResetStore);

  isPassStrong$ = new Subject<boolean>();

  isValidPassword$ = this.loginInputForm.valueChanges.pipe(
    map(() => !this.loginInputForm.controls.pass.invalid)
  );

  enableButton$ = combineLatest([
    this.isValidPassword$,
    this.isPassStrong$,
  ]).pipe(
    map(([isValidPassword, isPassStrong]) => isValidPassword && isPassStrong)
  );
}
