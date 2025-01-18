import { Footer, Header, Resume } from './components';

import { AppProvider } from './context';

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
