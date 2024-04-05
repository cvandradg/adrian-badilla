import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { User, UserCredential } from 'firebase/auth';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { client, clientDeclaration } from '../types/general-types';

@Injectable({
  providedIn: 'any',
})
export class firestoreDatabaseService {
  private firestore = inject(Firestore);

  // https://firebase.google.com/docs/firestore/manage-data/add-data
  /*
  Link importante para actualizar data en firestore
  */

  async setUser(user: UserCredential) {
    const client: client = clientDeclaration(user.user);
    const docRef = doc(this.firestore, 'users', client.uid);

    return await setDoc(docRef, client);
  }

  async deleteUser(user: User | client) {
    const docRef = doc(this.firestore, `users/${user.uid}`);
    return await deleteDoc(docRef);
  }

  updateUser$(client: client) {
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
