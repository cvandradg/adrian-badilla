import { Route } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';
import {
  unverifiedTo,
  verifiedTo,
} from '@adrianbadilla/shared/services/helperFunctions.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OobcodeCheckerComponent } from './components/oobcode-checker/oobcode-checker.component';
import { RequestPassResetComponent } from './components/request-pass-reset/request-pass-reset.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';

const redirectLoggedIn = () => verifiedTo(['landing']);
const redirectUnauthorized = () => unverifiedTo(['login']);

export const loginRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    ...canActivate(redirectLoggedIn),
  },
  {
    path: 'dashboard',
    pathMatch: 'prefix',
    ...canActivate(redirectUnauthorized),
    loadChildren: () =>
      import('@adrianbadilla/dashboard').then((r) => r.dashboardRoutes),
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
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
