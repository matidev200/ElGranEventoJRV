import '../src/public/style/base.scss';
import { IntlProvider } from "react-intl";
import { messages as allMessages } from './messages/messages';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];
  
  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <div className="App">
        <NavBar />
      </div>
    </IntlProvider>
  );
}

export default App;
