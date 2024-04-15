import { AppProvider } from './context';
import { Footer, Header, Resume } from './components';
import './Styles.scss';

export const App = () => {
  return (
    <AppProvider>
      <Header />
      <Resume />
      <Footer />
    </AppProvider>
  );
};

export default App;
