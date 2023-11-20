import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PassResetComponent } from '../pass-reset/pass-reset.component';
import { LoginStore } from './login.store';
import { firebaseAuthHelper } from '@adrianbadilla/shared/classes/firebaseAuthHelper';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Fontawesome } from "@adrianbadilla/shared/classes/fontawesome";
import { PrimaryAnimatedButtonComponent } from '@adrianbadilla/shared/components/primary-animated-button/primary-animated-button.component';
import { SecondaryAnimatedButtonComponent } from '@adrianbadilla/shared/components/secondary-animated-button/secondary-animated-button.component';

@Component({
  selector: 'adrianbadilla-ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    PassResetComponent,
    PrimaryAnimatedButtonComponent,
    SecondaryAnimatedButtonComponent,
    MODULES,
  ],
  providers: [LoginStore, Fontawesome],
})
export class LoginComponent extends firebaseAuthHelper {
  readonly loginStore = inject(LoginStore);
}