import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
// Project files
import { cloudStorageReference } from "./firebase";
const storage = getStorage();
export async function uploadFile(filename: string, file: any) {
  const fileReference = ref(cloudStorageReference, filename);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}
export async function deleFile(filePath: string) {
  const documentReference = ref(storage, filePath);
  await deleteObject(documentReference);
}
