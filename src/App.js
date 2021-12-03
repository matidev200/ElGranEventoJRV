
import React, { useEffect } from 'react';
import '../src/public/style/base.scss';
import { IntlProvider } from "react-intl";
import { messages as allMessages } from './messages/messages';
import Register from './views/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {obtenerDatos} from './service/firebaseService'

const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];

  useEffect(() => {
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
