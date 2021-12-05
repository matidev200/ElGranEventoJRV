
import React, { useEffect } from 'react';
import '../src/public/style/base.css';
import { IntlProvider } from "react-intl";
import NavBar from './components/NavBar/NavBar';
import { messages as allMessages } from './messages/messages';
import Home from "./views/Home/Home"
import Register from './views/Register/Register';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { obtenerDatos } from './service/firebaseService';
import Footer from './components/Footer/Footer'
import Invitados from './views/Invitados/Invitados';
import Spin from './components/Spin/Spin'

// cristo rey

const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    
      <Router className="App">
        <IntlProvider locale={currentLocale} messages={messages}>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/invitado" component={Invitados} />
          </Switch>
        <Footer /> 
      
        </IntlProvider>
      </Router>
   
  );
}

export default App;
