import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundcolor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundcolor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TexUtils"/>*/}
      {/*<Navbar/> */}
      <Router> 
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch> 
            <Route exact path="/about">
              <About mode={Mode} />
  </Route> 
            <Route exact path="/"> 
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter,character Counter,Remove extra Spaces"
                mode={Mode}
              />
            </Route> 
          </Switch> 
        </div>
      </Router>
    </>
  );
}

export default App;
