import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04023a';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path = "/about" element = {<About />}>
            </Route>
            <Route exact path = "/" element = {<Textform showAlert={showAlert} heading="Please Enter your Input Text below:" mode={mode} />}/>
          </Routes> */}
          <Textform showAlert={showAlert} heading="Please Enter your Input Text below:" mode={mode} />
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;













