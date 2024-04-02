import { from, tap } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { User, UserCredential } from 'firebase/auth';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { SharedStoreFacade } from '../+state/shared-store.facade';
import { client, clientDeclaration } from '../types/general-types';

@Injectable({
  providedIn: 'any',
})
export class firestoreDatabaseService {
  private firestore: Firestore = inject(Firestore);
  private facade = inject(SharedStoreFacade);

  setUser(user: UserCredential) {
    const client: client = clientDeclaration(user.user);
    const docRef = doc(this.firestore, 'users', client.uid);

    return from(setDoc(docRef, client)).pipe(
      tap(() => this.facade.storeUser(client))
    );
  }

  async deleteUser(user: User | client) {
    const docRef = doc(this.firestore, 'users', user.uid);
    return await deleteDoc(docRef);
  }

  user$() {
    // return (this.facade.user$ as Observable<User>).pipe(
    //   tap((x) => console.log('user de facade')),
    //   concatMap(
    //     (user) => {
    //       console.log('user del firestore database,', user)
    //       return (docData(
    //         doc(this.firestore, `users/${user.uid}`)
    //       ) as Observable<client>).pipe(
    //         tap((x) => console.log('hola'))
    //       )
    //     }
    //   )
    // );
    // return onSnapshot(
    //   doc(this.firestore, 'users', 'soporte@adrianbadilla.com'),
    //   (doc) => {console.log('doc?,',doc)}
    // )
    // const docRef = doc(this.firestore, "users", "soporte@adrianbadilla.com");
    // const docSnap = getDoc(docRef);
    // return from(docSnap)
  }
}
