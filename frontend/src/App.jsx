import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Startpg from './components/startpage';

function App() {
  
  return (
    <main>
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Startpg />} />
            </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App