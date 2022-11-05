// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');//whether a dark mode enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#2f345a';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
      <>
      {/* <Router> */}
        <NavBar title="Ninja Text Formatter" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about"  element={<About/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your text to analyze below" mode={mode}/>}>
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter Your text to analyze below" mode={mode}/>
        </div>
        {/* </Router> */}
      </>
  );
}

export default App;
