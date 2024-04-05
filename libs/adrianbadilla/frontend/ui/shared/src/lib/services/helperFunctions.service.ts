import { map, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { emailVerified } from '@angular/fire/auth-guard';

export { debounce } from '../decorators/debounce.decorator';

@Injectable({
  providedIn: 'root',
})
export class HelperService {}

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
