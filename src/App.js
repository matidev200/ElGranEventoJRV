import '../src/public/style/base.scss';
import { IntlProvider } from "react-intl";
import { messages as allMessages } from './messages/messages';


const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];
  
  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <div className="App">

      </div>
    </IntlProvider>
  );
}

export default App;
