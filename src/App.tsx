import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { AppContext } from './context/context';
import AppRouter from './routing/AppRouter';
import './styles/App.scss';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={{
      isAuth, setIsAuth
    }}>
      <BrowserRouter>
        <div className="App">
          <Header />
            <main>
              <AppRouter />
            </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
