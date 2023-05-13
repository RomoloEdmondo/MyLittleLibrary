import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { collection, getDoc } from '@angular/fire/firestore';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  COLLECTION = 'users/';

  constructor(private firestore: Firestore) {}

  async createUserData(user: User) {
    const userDocument = doc(this.firestore, this.COLLECTION + user.localId);
    await setDoc(userDocument, {
      email: user.email,
      favorite: [],
    });
  }

  async updateUserData(user: User) {
    const userDocument = doc(this.firestore, this.COLLECTION + user.localId);
    await updateDoc(userDocument, {
      email: user.email,
      favorite: user.favorite,
    });
  }

  async getUserData(user: User) {
    const querySnapshot = await getDoc(
      doc(this.firestore, this.COLLECTION + user.localId)
    );
    console.log(querySnapshot.data());

    if (!querySnapshot.data()) {
      this.createUserData(user);
      const querySnapshot = await getDoc(
        doc(this.firestore, this.COLLECTION + user.localId)
      );
      console.log(querySnapshot.data());
    }
    return querySnapshot.data();
  }
}
