import { environment } from 'src/environments/environment';

export interface IPathModel {
  path: string;
  _id?: number;
}

// Firebase path

export const FIREBASE_DB_ROOT_KEY = 'users';
export const FIREBASE_STORAGE_ROOT_KEY = 'dotc_talk_files';
export const FIREBASE_STORAGE_FILE_KEY = 'files';
export const FIREBASE_STORAGE_THUMBNAIL_KEY = 'thumbnails';
export const FIREBASE_STORAGE_ROOT_PATH = 'gs://' + environment.firebase.storageBucket;

// --------------------------------------------------------------------

// User Path

export const CREATE_USER: IPathModel = {
  path: '/' + 'user_info' + '/',
};

export const READ_USER: IPathModel = {
  path: '/' + 'user_info' + '/',
};

export const UPDATE_USER: IPathModel = {
  path: '/' + 'user_info' + '/',
};

// ------------------------------------------------------------------------

// Mail Path

export const CREATE_MAIL: IPathModel = {
  path: '/' + 'mails' + '/',
};

export const READ_MAIL: IPathModel = {
  path: '/' + 'mails/' + '/',
};

export const UPDATE_MAIL: IPathModel = {
  path: '/' + 'mails' + '/',
};

export const DELETE_MAIL: IPathModel = {
  path: '/' + 'mails' + '/',
  // path : '/' + 'mails' + '/' + _id,
};

// -------------------------------------------------------------------------
// Other Paths
