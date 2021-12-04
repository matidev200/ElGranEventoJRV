
import React, { useEffect } from 'react';
import '../src/public/style/base.scss';
import { IntlProvider } from "react-intl";
import NavBar from './components/NavBar/NavBar';
import { messages as allMessages } from './messages/messages';
import Home from "./views/Home/Home"
import Register from './views/Register/Register';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import { obtenerDatos } from './service/firebaseService';
import Footer from './components/Footer/Footer'

const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <div className="App">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registro" element={<Register />} />
          </Routes>
        </Router>
        <Footer /> 
      </div>
    </IntlProvider>
  );
}

export default App;
