import './App.css'
import NavBar from './Navbar/NavBar'
import Aside from './Aside/Side'
import EventComponent from './Main/EventComponent'
import '../src/Main/Event.css';
import SecondPage from './SecondPage/SecondPage';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  return (
    <div className='component ' >
      <NavBar />
      <BrowserRouter>
        <div className='aside '>
          <div className='aside_left'>
            <Aside></Aside>
          </div>
        </div>
        {
            <div>
            {/* <Link to="/" className="btn btn-warning"></Link> */}
            {/* <Link to="/register" className='btn btn-light ms-2 ' ></Link> */}
          </div>
          }
        <main className='border_design'>
          
          {/* <EventComponent /> */}
          {/* <SecondPage /> */}
          <Routes>
            <Route path='/' element={<EventComponent />} />
            <Route path='register' element={<SecondPage />} />

          </Routes>
        </main>

      </BrowserRouter>

    </div>
  )
}

export default App
