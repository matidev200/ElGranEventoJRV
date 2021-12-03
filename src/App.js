
import React, { useEffect } from 'react';
import '../src/public/style/base.scss';
import { IntlProvider } from "react-intl";
import { messages as allMessages } from './messages/messages';
import NavBar from './components/NavBar/NavBar';
import {collection, getDocs} from 'firebase/firestore';
import db from './config/firebase'
import {ButtonPrimary} from './components/Buttons/Buttons'
import Register from './views/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];

  useEffect(() => {
    const obtenerDatos = async() => {
      const querySnapshot = await getDocs(collection(db, 'usuarios'))
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      })
     
    }
   

    obtenerDatos()
  }, [])
  
  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/Registro" element={<Register />}/>
            </Routes>
          </Router>
      </div>
    </IntlProvider>
  );
}

export default App;
