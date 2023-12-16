import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { RegisterComponent } from './components/register/register.component';
import { OobcodeCheckerComponent } from './components/oobcode-checker/oobcode-checker.component';
import { RequestPassResetComponent } from './components/request-pass-reset/request-pass-reset.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';

export const loginRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    providers: [MODULES],
  },
  {
    path: 'code',
    component: OobcodeCheckerComponent,
    pathMatch: 'full',
  },
  {
    path: 'passReset',
    component: RequestPassResetComponent,
    pathMatch: 'full',
  },
  {
    pathMatch: 'full',
    component: EmailVerificationComponent,
    path: 'email-verification',
  },
];
