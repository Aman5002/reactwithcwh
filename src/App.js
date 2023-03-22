import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
const [mode, setmode] = useState('light');

const showAlert = (message , type)=>{
setalert({
  msg: message,
  type: type
})
setTimeout(() => {
  setalert(null)
}, 1500);
}


const clickmodehandler = () =>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='black'
    showAlert("Dark Mode is Enabled", "success")
    document.title = "TextUtiles -DarkMode";
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light Mode is Enabled" , "success")
    document.title = "TextUtiles -LightMode";

  }
}
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" abouttitle="About" mode={mode} modehandler={clickmodehandler} />
      <div className="container my-3">
        <Alert alert={alert}/>
        {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForms heading="Enter the Text to Analyze" alert={showAlert} mode={mode}/>
  
          {/* </Route>
        </Switch> */}
        
            {/* <About /> */}
         
           


      </div>
      {/* </Router> */}
    </>
  );
}
 
export default App;
