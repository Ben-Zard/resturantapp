// firestoreUtils.ts

import { db } from './firebase';
import { getFirestore, collection, getDocs, doc, updateDoc, setDoc, getDoc, arrayUnion } from 'firebase/firestore/lite';

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


export const updateTableAvailability = async (tableId: string, available: boolean) => {
  const tableRef = doc(db, 'tables', tableId);
  await updateDoc(tableRef, { available: available });
};

export const setUserFirebase = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const user = {
    id: userId,
  };
  await updateDoc(userRef, user);
};

export const setReservation = async (userId:string,table:string,total:string) => {
  const userRef = doc(db, "users", userId);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const reservation = {
    table: table,
    time: formattedDate,
    total: total,
  };

  await updateDoc(userRef, {
    reservation: arrayUnion(reservation)
  });
};

export const getReservation = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error(`User ${userId} not found`);
  }

  const userData = userDoc.data();

  return userData;
};