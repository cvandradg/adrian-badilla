import { from, map, Observable } from 'rxjs';
import { Credentials } from '../types/general-types';
import { Injectable, inject } from '@angular/core';
import {
  UserCredential,
  confirmPasswordReset,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  Auth,
  GoogleAuthProvider,
  User,
  applyActionCode,
  authState,
  checkActionCode,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  user,
  deleteUser,
} from '@angular/fire/auth';

@Injectable({
  providedIn: null,
})
export class AuthService {
  private auth: Auth = inject(Auth);

  readonly user$ = user(this.auth);
  readonly authState$ = authState(this.auth);

  getCurrentUser() {
    return this.user$;
  }

  getUserSession() {
    return this.authState$;
  }

  signOut() {
    return from(signOut(this.auth));
  }

  additionalUserInfo(user: UserCredential) {
    if (!this.auth.currentUser) return;
    return getAdditionalUserInfo(user);
  }

  sendEmailVerification(user: User) {
    return from(sendEmailVerification(user));
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
    return from(createUserWithEmailAndPassword(this.auth, user, pass));
  }

  deleteCurrentUser() {
    if (!this.auth.currentUser) return;

    return from(deleteUser(this.auth.currentUser)).pipe(
      map(() => 'deletedUser')
    );
  }
}
