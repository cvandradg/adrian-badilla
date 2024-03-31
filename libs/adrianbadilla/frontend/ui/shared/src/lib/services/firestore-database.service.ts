import { User } from 'firebase/auth';
import { Observable, concatMap, distinctUntilChanged, first, from, last, map, skip, take, tap } from 'rxjs';
import { setDoc, doc, collection, DocumentSnapshot, SnapshotOptions, onSnapshot, getDoc } from 'firebase/firestore';
import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, docData, } from '@angular/fire/firestore';
import { NothingOr, client, initialClient } from '../types/general-types';
import { SharedStoreFacade } from '../+state/shared-store.facade';

@Injectable({
  providedIn: 'any',
})
export class firestoreDatabaseService {
  private facade = inject(SharedStoreFacade);
  private firestore: Firestore = inject(Firestore);

  setUser(user: User) {
    console.log('se llama set user?')
    return from(setDoc(doc(this.firestore, 'users', user?.uid), user));
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
