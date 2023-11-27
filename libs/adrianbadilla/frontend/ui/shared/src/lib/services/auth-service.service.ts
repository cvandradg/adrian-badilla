import { FirebaseError } from 'firebase/app';
import { Credentials } from '../types/types';
import { Injectable, inject } from '@angular/core';
import { UserCredential, confirmPasswordReset, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { from, catchError, NEVER, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider, User, applyActionCode, authState, checkActionCode, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { ErrorHandlerService } from './error-handler.service';
import { SharedStoreFacade } from '../+state/shared-store.facade';

@Injectable({
  providedIn: null,
})
export class AuthService {
  private auth: Auth = inject(Auth);

  readonly user$ = user(this.auth);
  readonly authState$ = authState(this.auth);

  facade = inject(SharedStoreFacade);
  firebaseAuth = inject(AngularFireAuth);
  errorHelperService = inject(ErrorHandlerService);

  getCurrentUser() {
    return this.user$;
  }

  getUserSession() {
    return this.authState$
  }

  signOut() {
    return from(signOut(this.auth));
  }

  verifyEmail(code: string) {
    return from(applyActionCode(this.auth, code));
  }

  checkOobCode(oobCode: string) {
    return from(checkActionCode(this.auth, oobCode));
  }

  recoverPassword(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  resetPass(code: string, pass: string) {
    return from(confirmPasswordReset(this.auth, code, pass));
  }

  login({ user, pass }: Credentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, user, pass));
  }

  googleSignin(): Observable<UserCredential> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  createAccount({ user, pass }: Credentials): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, user, pass))
  }

  sendEmailVerification(userInfo: User) {
    return from(sendEmailVerification(userInfo as User)).pipe(
      catchError((err: FirebaseError) => {
        this.facade.setError(this.errorHelperService.firebaseErrorHandler(err));
        return NEVER;
      })
    );
  }
}
