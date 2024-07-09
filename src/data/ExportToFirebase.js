/*

// Una vez exportados los datos comento este documento no vaya a ser que por error llame de nuevo esta función y vuelva a exportar mas datos repetidos.
// No lo elimino para que quede documentada la exportación. Dejo el documento json original como recuerdo.


import { collection, addDoc } from 'firebase/firestore';
import { dbAnimales } from '../db/FirebaseConnector';
import dataAnimals from './dataAnimales.json'


export const exportAnimalsToFirebase = () => {
  const animalesCol = collection(dbAnimales, 'animales')

  let datos


  dataAnimals.map((animal) => {
    datos = {
      name: animal.name,
      birth: animal.birth,//Timestamp.fromDate(new Date(animal.birth)),
      title: animal.title,
      description: animal.description,
      sex: animal.sex,
      since: animal.since,
      breed: animal.breed,
      image: animal.image
    }
    addDoc(animalesCol, datos)
      .then((res) => { })
      .catch((error) => { console.log(error); })
  })
}
*/