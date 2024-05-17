import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js';

import { app, firebaseConfig } from './app.js';
import { firebaseErrorMessage } from './errors.js'

const storage = getStorage(app);

export const FireStorage = {};

FireStorage.getFileUrl = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    const fileUrl = await getDownloadURL(fileRef);
    return fileUrl
  } catch (error) {
    console.log(error)
    return undefined
  }
}