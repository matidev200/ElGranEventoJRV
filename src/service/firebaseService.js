import {collection, getDocs, addDoc,doc, getDoc} from 'firebase/firestore';
import db from '../config/firebase';

let pendientes = [];
export let docs = [];

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
        const docRef = await addDoc(collection(db, 'usuarios'), {
            nombre: data.nombre,
            apellido: data.apellido,
            correo: data.correo,
            iglesia: data.iglesia,
            telefono: data.telefono
    });
    return [docRef.id, false]
} else {
    
    const docRefPendientes = await addDoc(collection(db, 'pendientes'),{
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        iglesia: data.iglesia,
        telefono: data.telefono
    });
    return [docRefPendientes.id, true]
}
}

export const postData = async(data, setSpinning) => {
    try {
        const validacionCorreo = await validarCorreo(data.correo)
        if(validacionCorreo){
            setSpinning(false)
            return;
        } 
        const id = await chooseFunction(data)
        setSpinning(false)
        return id;
} catch (e) {
    console.log(e)
    setSpinning(false)
}        
}



export const getNameById = async(id, setUsuario) => {
   try{ const nameById = doc(db, 'usuarios', id);
    const docSnap = await getDoc(nameById)
    
    setUsuario({
        nombre: docSnap.data().nombre,
        apellido: docSnap.data().apellido
    })
    }catch (e){
        // console.log("dato repetido")
    }

   
}




