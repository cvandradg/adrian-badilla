import { Route } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';
import {
  verifiedTo,
} from '@adrianbadilla/shared/services/helperFunctions.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OobcodeCheckerComponent } from './components/oobcode-checker/oobcode-checker.component';
import { RequestPassResetComponent } from './components/request-pass-reset/request-pass-reset.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

const redirectLoggedIn = () => verifiedTo(['dashboard']);

export const loginRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    ...canActivate(redirectLoggedIn),
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
