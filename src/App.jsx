import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Protect from './components/Protect'
function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<Protect><About/></Protect>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
