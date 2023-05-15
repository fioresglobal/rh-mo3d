import './App.css'
import Navbarh from './Components/Navigation/Nav'
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import Footer from './Components/Home/Footer'
import ModelViewer from './Components/Home/Model'
import './assets/css/animate.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.css'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.min.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/nice-select.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/responsive.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/icomoon.css'
import './assets/css/normalize.css'
import './assets/css/jquery-ui.css'
import './assets/css/default-skin.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'




function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbarh/>
        <Routes> 
                 <Route path="/" element={<Home/>}/>
                  <Route path="/team" element={<Team/>}/>
                  <Route path="/model" element={<ModelViewer/>}/>
                 </Routes>
                 <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
