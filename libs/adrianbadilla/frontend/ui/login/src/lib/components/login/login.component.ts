import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginStore } from './login.store';
import { RouterModule } from '@angular/router';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { PassResetComponent } from '../pass-reset/pass-reset.component';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';

@Component({
  selector: 'adrianbadilla-ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    PassResetComponent,
    COMPONENTS,
    MODULES,
  ],
  providers: [LoginStore],
})
export class LoginComponent extends BaseComponent {
  readonly loginStore = inject(LoginStore);
}
