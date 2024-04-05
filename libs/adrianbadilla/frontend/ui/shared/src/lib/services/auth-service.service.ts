import { from, Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { Credentials } from '../types/general-types';
import {
  UserCredential,
  confirmPasswordReset,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  Auth,
  User,
  user,
  signOut,
  authState,
  deleteUser,
  applyActionCode,
  checkActionCode,
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

  async deleteCurrentUser(user: User) {
    return await deleteUser(user);
  }

  additionalUserInfo(user: UserCredential) {
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
}
