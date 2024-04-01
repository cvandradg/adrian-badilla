import { User } from 'firebase/auth';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { client, deepCopy, initialClient } from '../types/general-types';
import { SharedStoreFacade } from '../+state/shared-store.facade';

@Injectable({
  providedIn: 'any',
})
export class firestoreDatabaseService {
  private firestore: Firestore = inject(Firestore);
  private facade = inject(SharedStoreFacade);

  async setUser(user: User, profileData?: typeof initialClient) {
    const client: client = deepCopy({
      ...user,
      ...(profileData || initialClient),
    });
    const docRef = doc(this.firestore, 'users', client.uid);
    return await setDoc(docRef, client).then(() =>
      this.facade.storeUser(client)
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
