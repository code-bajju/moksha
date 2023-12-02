import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
// import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';
import Yoga from './Pages/Yoga/pages/Yoga/Yoga';
import Result from "./Pages/Diet/components/pages/ResultPage";
import MainContextProvider, { MainContext } from './Pages/Diet/context/MainContextProvider';
import BmiCalculator from './Pages/Diet/components/BmiCalculator';
import Nutrients from './Pages/Nutrients/Nutrients';
import NutrientCount from './Pages/Nutrients/NutrientCount';
import MSC from './Pages/Yoga/Audio.js';
function App() {
  return (
    <div className="App">
<MainContextProvider>      <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          {/* <Route path='/dentist' element={<Dentist />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/start' element ={<Yoga/>}/>
          <Route path='/results' element ={<Result/>}/>
          <Route path='/bmi' element ={<BmiCalculator/>}/>
          <Route path='/NutriCount' element={<NutrientCount/>}/>
          <Route path='/Audio' element={<MSC />} />
        </Routes>
        
        <Footer />
      </Router>
    </AuthProvider>
    </MainContextProvider>

    </div>
  );
}

export default App;
