import Menu from './components/Menu/Menu';
import Homepage from './pages/Homepage/Homepage';
import Moviepage from './pages/Moviepage/Moviepage';
import './App.css';
import './css/Style.css'
import './css/icofont.min.css'
import routes from './routes';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import React, {Component} from 'react';
import Moviedetail from './pages/Moviedetail/Moviedetail';
import Eventpage from './pages/Eventpage/Eventpage';
import Eventdetail from './pages/Eventdetail/Eventdetail';
import Sportpage from './pages/Sportpage/Sportpage';
import Sportdetail from './pages/Sportdetail/Sportdetail';
import Ticketchose from './pages/Moviedetail/Ticketchose';
import Seatchose from './pages/Moviedetail/Seatchose';
import Checkout from './pages/checkout/Checkout';
import Footbar from './components/Footbar/Footbar';
import Eventdetail2 from './pages/Eventdetail/Eventdetail-2';
import Speakerpage from './pages/SpeakerPage/Speakerpage';
import Sportdetail2 from './pages/Sportdetail/Sportdetail2';
import Aboutpage from './pages/Aboutus/Aboutpage';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blogpage/Blogpage';
import Signup from './pages/Login/Signup';
import Login from './pages/Login/Login';





class App extends Component {
  render(){
  return (
    
    <Router>
       <Routes>
     <Route path="/signup" element={<Signup/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
      </Route>
     </Routes>  
    <div className="App">   
      <div className="Divall">
                <Menu/>             
      </div>
      <div>
     
        <Routes>
          
          <Route path="/" element={<Homepage/>}>
          </Route>
          <Route path="/Moviepage" element={<Moviepage/>}>
          </Route>
          <Route path="/Moviedetail/:id" element={<Moviedetail/>}>
          </Route>
          <Route path="/Eventpage" element={<Eventpage/>}>
          </Route>
          <Route path="/Eventdetail/:id" element={<Eventdetail/>}>
          </Route>
          <Route path="/Eventdetail2/:id" element={<Eventdetail2/>}>
          </Route>
          <Route path="/Sportpage" element={<Sportpage/>}>
          </Route>
          <Route path="/Sportdetail/:id" element={<Sportdetail/>}>
          </Route>
          <Route path="/Sportdetail2/:id" element={<Sportdetail2/>}>
          </Route>
          <Route path="/Ticketchose/:id" element={<Ticketchose/>}>
          </Route>
          <Route path="/Seatchose/:id" element={<Seatchose/>}>
          </Route>
          <Route path="/Checkout/:id" element={<Checkout/>}>
          </Route>
          <Route path="/Speaker/:id" element={<Speakerpage/>}>
          </Route>
          <Route path="/About" element={<Aboutpage/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
          <Route path="/Blog" element={<Blog/>}>
          </Route>
        </Routes>
     
      </div>

    </div>
    </Router>
      
  );
  }
}



export default App;
