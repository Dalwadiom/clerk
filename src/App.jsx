import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Protect from './components/Protect'
import SendMail from './components/SendMail'
import Slider from './components/Slider'
function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<Protect><About/></Protect>}/>
              <Route path='/sendmail' element={<SendMail/>}/>
              <Route path='/slider' element={<Slider/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
