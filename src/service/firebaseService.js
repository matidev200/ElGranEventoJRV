import {collection, getDocs, addDoc} from 'firebase/firestore';
import db from '../config/firebase';

const docs = [];

export const obtenerDatos = async() => {
    const querySnapshot = await getDocs(collection(db, 'usuarios'))
    
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
    })

}

export const postData = async() => {
    
    if(docs.length < 200){
        console.log('Entrada reservada')
        const docRef = await addDoc(collection(db, 'usuarios'), {
            nombre: "Prueba",
            apellido: "Prueba",
            edad: 32
        });
        console.log(docRef)
    } else {

        console.log('Tu entrada va a estar pendiente ya que se agotaron')
        await addDoc(collection(db, 'pendientes'),{
            nombre: "Prueba",
            apellido: "Prueba",
            edad: 32
        })
    }        
}


