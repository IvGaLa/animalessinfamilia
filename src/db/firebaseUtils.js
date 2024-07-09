import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { dbAnimales } from './FirebaseConnector';

export const GetAnimalCollection = (data) => {
  return collection(dbAnimales, data.config.firestore.collection)
}

export const GetAnimalsAll = (data, setAnimales) => {
  const animalesCol = GetAnimalCollection(data)
  getDocs(query(animalesCol, orderBy("image")))
    .then((res) => {
      setAnimales(
        res.docs.map((animal) => {
          return { ...animal.data(), id: animal.id }
        })
      )
    })
}

