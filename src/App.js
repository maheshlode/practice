import { useState } from 'react';
import './App.css';
import About from './components/About Us';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const removeBackground=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
  }
  const toggleMode=(cls)=>{
    removeBackground();
    document.body.classList.add('bg-'+cls);
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-dark mode';
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='TextUtils-light mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
          {/* <About mode={mode}/> */}
        </div>
        </Router>
    </>
  );
}

export default App;
