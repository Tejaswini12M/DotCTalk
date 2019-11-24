import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { iFileUpload } from '../utils/generic-model';
import { FIREBASE_DB_ROOT_KEY } from './path.constants';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  constructor(
    private firebaseDatabase: AngularFireDatabase,
    private firebaseStorage: AngularFireStorage
  ) { }

  public CHILD_PATH: string;

  public setChildPath(CHILD_PATH) {
    this.CHILD_PATH = CHILD_PATH;
  }
  public uuid = firebase.auth().currentUser.uid;
  public PATH = FIREBASE_DB_ROOT_KEY + '/' + this.uuid + '/' + this.CHILD_PATH;

  // Firebase DB Operation--------------------------------------------------------------------------------------------------------------

  public getDatabaseRef(PATH) {
    const dbRef = this.firebaseDatabase.database.ref(PATH);
    return dbRef;
  }

  public async createKey(path, payload): Promise<any> {
    const dbRef = this.getDatabaseRef(path);
    return await dbRef.set(payload).catch(error => error);
  }

  public async readDataKey(path): Promise<any> {
    const dbRef = this.getDatabaseRef(path);
    const dataSnapshot: firebase.database.DataSnapshot = await dbRef.once('value').catch(error => error);
    const dataVal = await dataSnapshot.val();
    return dataVal;
  }

  public async updateKey(path, payload): Promise<any> {
    const dbRef = this.getDatabaseRef(path);
    return await dbRef.update(payload).catch(error => error);
  }

  public async deleteKey(path): Promise<any> {     // path should contain delete item id
    const dbRef = this.getDatabaseRef(path);
    return await dbRef.remove().catch(error => error);
  }

  //Storage Files Operations----------------------------------------------------------------------------

  public async uploadFile(path, file: iFileUpload): Promise<any> {
    // const refPath = this.getDatabaseRef(path);
    const fileDbRef = this.firebaseStorage.storage.ref(path).child(file.id);
    return await fileDbRef.put(file.content).catch(error => error);
  }

  public async getFileUrl(path, fileId: string): Promise<any> {
    return await this.firebaseStorage.ref(path).child(fileId).getDownloadUrl().catch(e => null);
  }

}
