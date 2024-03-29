import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Startpg from './components/startpage';
import NavBar from './components/navbar';
import AnimCursor from './components/Animatedcursor';
//import EventInfoCard from './components/EventInfoCard';
import {Scrollbars} from 'react-custom-scrollbars';

function App() {
  
  return (
    <main className='body w-screen h-screen bg-white '>
      <Scrollbars>

      <BrowserRouter>
        <AnimCursor  />
      <NavBar />
      <Routes>
              <Route path='/' element={<Startpg />} />
              
              {/* <Route path='/event' element={<EventInfoCard/>} /> */}
      </Routes>
      </BrowserRouter>
      </Scrollbars>
    </main>
  )
}

export default App