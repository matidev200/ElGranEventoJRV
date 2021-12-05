import {collection, getDocs, addDoc} from 'firebase/firestore';
import db from '../config/firebase';

const docs = [];

export const obtenerDatos = async() => {
    const querySnapshot = await getDocs(collection(db, 'usuarios'))
    
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
    })

}

export const postData = async(data) => {
    
    if(docs.length < 200){
        console.log('Entrada reservada')
        const docRef = await addDoc(collection(db, 'usuarios'), {
            nombre: data.nombre,
            apellido: data.apellido,
            mail: data.mail,
            iglesia: data.iglesia,
            telefono: data.telefono
        });
        console.log(docRef)
    } else {

        console.log('Tu entrada va a estar pendiente ya que se agotaron')
        await addDoc(collection(db, 'pendientes'),{
            nombre: data.nombre,
            apellido: data.apellido,
            mail: data.mail,
            iglesia: data.iglesia,
            telefono: data.telefono
        })
    }        
}


