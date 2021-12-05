import {collection, getDocs, addDoc} from 'firebase/firestore';
import db from '../config/firebase';

let pendientes = [];
let docs = [];

export const obtenerDatos = async() => {
    const querySnapshot = await getDocs(collection(db, 'usuarios'))
    
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
    })

}

export const obtenerPendientes = async() => {
    const querySnapshot = await getDocs(collection(db, 'pendientes'))
    
    querySnapshot.forEach((doc) => {
      pendientes.push({...doc.data(), id: doc.id})
    })

}



const validarCorreo = async(correo) => {
        let bool = false;   
        await obtenerDatos();
        await obtenerPendientes();
        docs.forEach((doc) => {
            let isExist = Object.values(doc).some(e =>  e === correo)
            if(isExist){
                bool = true;
            } else {
                return;
            }
            
        });
        pendientes.forEach((doc) => {
            let isExist = Object.values(doc).some(e =>  e === correo)
            if(isExist){
                bool = true;
            } else {
                return;
            }
            
        });
        return bool; 
}

const chooseFunction = async(data) => {
    if(docs.length < 2){
        console.log('Entrada reservada')
        const docRef = await addDoc(collection(db, 'usuarios'), {
            nombre: data.nombre,
            apellido: data.apellido,
            correo: data.correo,
            iglesia: data.iglesia,
            telefono: data.telefono
    });
    
    // console.log(docRef)
} else {

    console.log('Tu entrada va a estar pendiente ya que se agotaron')
    await addDoc(collection(db, 'pendientes'),{
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        iglesia: data.iglesia,
        telefono: data.telefono
    })
}
}

export const postData = async(data, setSpinning) => {
    try {
        const validacionCorreo = await validarCorreo(data.correo)
        if(validacionCorreo){
            setSpinning(false)
            console.log('correo repetido')
            return;
        } 
        await chooseFunction(data)
        setSpinning(false)
        
} catch (e) {
    console.log(e)
    setSpinning(false)
}        
}


