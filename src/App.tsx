import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import MainPage from './pages/MainPage';
import './styles/App.scss'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <main>
            <Routes>
              <Route index element={<MainPage />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
