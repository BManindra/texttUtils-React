// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About.js';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("Enable dark mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#616161";
      setModeText("Enable light mode");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 3000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 2000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Enable dark mode");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light Mode";
    }
  }

  // const changegreen = () => {
  //   document.body.style.backgroundColor = '#35C649'
  // }
  // const changeyellow = () => {
  //   document.body.style.backgroundColor = '#CAB911'
  // }
  // const changered = () => {
  //   document.body.style.backgroundColor = '#C15031'
  // }



  return (
    <>
      {/* <Router> */}
        {/* <Navbar about="About" /> */}
        <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
        {/* <Navbar title="Home" about="About"  mode={mode} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/> */}

        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />

        <Alert alert={alert} />
        {/* <div className='container my-3'> */}
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}/> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
          {/* </Routes> */}
        {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
