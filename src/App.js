import { Routes ,Route } from 'react-router';
import './App.css';
import About from './components/about/about';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
function App() {
 
  return (
    <div className="App">
      

     <Routes>
     <Route path='/'  element={<Home/>} />
       <Route path='/about'  element={<About/>} />
       <Route path='/portfolio' element={<Portfolio />} />
     </Routes>

    </div>
  );
}

export default App;

