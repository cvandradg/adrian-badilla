import { FirebaseError } from 'firebase/app';
import { Credentials } from '../types/types';
import { Injectable, inject } from '@angular/core';
import { sendEmailVerification } from 'firebase/auth';
import { from, of, catchError, NEVER, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, User } from '@angular/fire/auth';
import { ErrorHandlerService } from './error-handler.service';
import { SharedStoreFacade } from '../../+state/shared-store.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  facade = inject(SharedStoreFacade);
  firebaseAuth = inject(AngularFireAuth);
  errorHelperService = inject(ErrorHandlerService);

  signOut() {
    return from(this.firebaseAuth.signOut());
  }

  verifyEmail(code: string) {
    return from(this.firebaseAuth.applyActionCode(code));
  }

  checkOobCode(oobCode: string) {
    return from(this.firebaseAuth.checkActionCode(oobCode));
  }

  recoverPassword(email: string) {
    return from(this.firebaseAuth.sendPasswordResetEmail(email));
  }

  resetPass(code: string, pass: string) {
    return from(this.firebaseAuth.confirmPasswordReset(code, pass));
  }

  getCurrentUser() {
    localStorage.setItem('attemptedToLoggedIn', 'true');
    return from(this.firebaseAuth.currentUser);
  }

  createAccount({ user, pass }: Credentials) {
    localStorage.setItem('attemptedToLoggedIn', 'true');
    return from(
      this.firebaseAuth.createUserWithEmailAndPassword(user, pass)
    ).pipe(this.getUser);
  }

  googleSignin() {
    localStorage.setItem('attemptedToLoggedIn', 'true');
    return from(
      this.firebaseAuth.signInWithPopup(new GoogleAuthProvider())
    ).pipe(this.getUser);
  }

  auth({ user, pass }: Credentials) {
    localStorage.setItem('attemptedToLoggedIn', 'true');
    return from(this.firebaseAuth.signInWithEmailAndPassword(user, pass)).pipe(
      this.getUser
    );
  }

  getUserSession() {
    if (localStorage.getItem('attemptedToLoggedIn') !== 'true') return of(null);

    localStorage.setItem('attemptedToLoggedIn', 'true');
    return this.firebaseAuth.authState;
  }

  sendEmailVerification(userInfo: User) {
    return from(sendEmailVerification(userInfo as User)).pipe(
      catchError((err: FirebaseError) => {
        this.facade.setError(this.errorHelperService.firebaseErrorHandler(err));
        return NEVER;
      })
    );
  }

  get getUser() {
    return map((response: any) => response.user.multiFactor.user as User);
  }
}
