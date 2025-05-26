import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, setDoc, type Firestore } from 'firebase/firestore'
import { useNuxtApp } from '#app'

export const useFirestore = () => {
  const { $db } = useNuxtApp()
  const db = $db as Firestore;
  const saveToFirestore = async (
    collectionName: string,
    data: Record<string, any>,
    orderId?: string
  ) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date(),
      })
      return { success: true, id: docRef.id }
    } catch (error) {
      console.error('Firestore Save Error:', error)
      return { success: false, error }
    }
  }

  const updateFirestore = async (collectionName: string, docId: string, data: Record<string, any>) => {
    try {
      const docRef = doc(db, collectionName, docId)
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date(),
      })
      return { success: true }
    } catch (error) {
      console.error('Firestore Update Error:', error)
      return { success: false, error }
    }
  }

  const deleteFromFirestore = async (collectionName: string, docId: string) => {
    try {
      const docRef = doc(db, collectionName, docId)
      await deleteDoc(docRef)
      return { success: true }
    } catch (error) {
      console.error('Firestore Delete Error:', error)
      return { success: false, error }
    }
  }

  const getCollectionData = async (collectionName: string) => {
    const colRef = collection(db, collectionName)
    const snapshot = await getDocs(colRef)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }

  return { saveToFirestore, updateFirestore, deleteFromFirestore, getCollectionData }
}
