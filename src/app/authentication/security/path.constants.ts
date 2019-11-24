import { environment } from 'src/environments/environment';

export interface iPathModel {
  path: string,
  _id?: number,
}

//Firebase path

export const FIREBASE_DB_ROOT_KEY = 'users';
export const FIREBASE_STORAGE_ROOT_KEY = 'dotc_talk_files';
export const FIREBASE_STORAGE_FILE_KEY = 'files';
export const FIREBASE_STORAGE_THUMBNAIL_KEY = 'thumbnails';
export const FIREBASE_STORAGE_ROOT_PATH = "gs://" + environment.firebase.storageBucket;

//--------------------------------------------------------------------

// User Path

export const CREATE_USER: iPathModel = {
  "path": "/" + "user_info" + "/",
}

export const READ_USER: iPathModel = {
  "path": "/" + "user_info" + "/",
}

export const UPDATE_USER: iPathModel = {
  "path": "/" + "user_info" + "/",
}

//------------------------------------------------------------------------

//Mail Path

export const CREATE_MAIL: iPathModel = {
  path: "/" + "mails" + "/",
}

export const READ_MAIL: iPathModel = {
  "path": "/" + "mails/" + "/",
}

export const UPDATE_MAIL: iPathModel = {
  path: "/" + "mails" + "/",
}

export const DELETE_MAIL: iPathModel = {
  path: "/" + "mails" + "/",
  // path : "/" + "mails" + "/" + _id,
}

//-------------------------------------------------------------------------
//Other Paths
