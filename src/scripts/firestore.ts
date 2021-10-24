import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore/lite";
import { fireStoreDatabase } from "./firebase";
export async function createDocumentWithId(
  path: string,
  id: string,
  data: object
) {
  const collectionReference = doc(fireStoreDatabase, path, id);
  await setDoc(collectionReference, data);

  return id;
}
export async function createDocument(path: string, data: object) {
  const collectionReference = collection(fireStoreDatabase, path);
  const documentReference = await addDoc(collectionReference, data);

  return documentReference.id;
}
// Read files
export async function getCollection(path: string) {
  const collectionReference = collection(fireStoreDatabase, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
export async function getDocument(path: string, id: string) {
  const docRef = doc(fireStoreDatabase, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const document = docSnap.data();
    return { id: id, ...document };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Update file
export async function overWriteDocument(
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(fireStoreDatabase, path, id);
  await setDoc(docReference, data);
}
// Update file
export async function updateDocument(path: string, id: string, data: object) {
  const documentReference = doc(fireStoreDatabase, path, id);
  await updateDoc(documentReference, data);
}

// Delete file
export async function deleteDocument(path: string, id: string) {
  const docReference = doc(fireStoreDatabase, path, id);

  await deleteDoc(docReference);
}
