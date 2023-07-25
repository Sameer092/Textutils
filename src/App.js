import React, { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const toggleModefunc = () => {
    if (darkMode === 'light' && Mode === 'white') {
      darkModefunc('dark')
      dModefunc('black')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      darkModefunc('light')
      dModefunc('white')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const tiggleModefunc = () => {
    if (gdarkmode === 'light' && gMode === 'white') {
      gdarkmodefunc('success')
      gdModefunc('success')
      document.body.style.backgroundColor = '#092809db'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      gdarkmodefunc('light')
      gdModefunc('white')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const triggleModefunc = () => {
    if (bdarkmode === 'light' && bMode === 'white') {
      bdarkmodefunc('primary')
      bdModefunc('primary')
      document.body.style.backgroundColor = '#0d2e44'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      bdarkmodefunc('light')
      bdModefunc('white')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [gdarkmode, gdarkmodefunc] = useState('light')
  const [bdarkmode, bdarkmodefunc] = useState('light')
  const [darkMode, darkModefunc] = useState('light')
  const [Mode, dModefunc] = useState('white')
  const [alert, setAlert] = useState(null)
  const [gMode, gdModefunc] = useState('white')
  const [bMode, bdModefunc] = useState('white')


  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtills" aboutText="About" mode={darkMode} gmode={gdarkmode} bmode={bdarkmode} toggleMode={toggleModefunc} tiggleMode={tiggleModefunc} triggleMode={triggleModefunc} />
        <Alert alert={alert} />
        <div className="container my-3" >
          {/* <Routes>
            <Route exact path="/about" element={<About  mode={darkMode}/>}></Route>
            <Route
              exact path="/"
              element={ */}
                <Textform heading="TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode={Mode} gmode={gMode} bmode={bMode} alert={showAlert} />
               {/* } */}
             {/* ></Route> */}
           {/* </Routes>  */}
        </div>
       {/* </BrowserRouter>  */}
    </>
  );
}

export default App;


