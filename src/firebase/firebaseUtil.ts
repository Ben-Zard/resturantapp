// firestoreUtils.ts

import { db } from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export async function getDocumentToCollection(collectionName: string) {
  try {
    const docRef  = collection(db, collectionName);
    const citySnapshot = await getDocs(docRef);
    const docList = citySnapshot.docs.map(doc => doc.data());
    return docList
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
}

export const fetchMenuItems = async () => {
  const menuItemsCol = collection(db, 'menuItems');
  const menuItemsSnapshot = await getDocs(menuItemsCol);
  const menuItemsList = menuItemsSnapshot.docs.map(doc => doc.data());
  return menuItemsList;
}

export const fetchTable = async () => {
  const menuItemsCol = collection(db, 'tables');
  const menuItemsSnapshot = await getDocs(menuItemsCol);
  const menuItemsList = menuItemsSnapshot.docs.map(doc => doc.data());
  return menuItemsList;
}
