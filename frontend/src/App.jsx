import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Startpg from './components/startpage';
import NavBar from './components/navbar';
import EventInfoCard from './components/EventInfoCard';
function App() {
  
  return (
    <main className='body w-screen h-screen bg-white '>
      <BrowserRouter>
      <NavBar />
      <Routes>
              <Route path='/' element={<Startpg />} />
              <Route path='/event' element={<EventInfoCard/>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
