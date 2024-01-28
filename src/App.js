import {Routes, Route} from 'react-router-dom' 
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>
    </div>
  );
}

export default App;
