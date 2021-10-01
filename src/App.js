import { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";

import { BrowserRouter, Route } from "react-router-dom";
import { useUserValue } from "./context/Sesion";
import Home from "./Pages/Home";
import DetailTemplate from "./Pages/DetailTemplate";

function App() {
  const [{ usuario, auth }, dispatch] = useUserValue();

 
  return (
    <Wrapper>
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={(props) => (
            <Home {...props} />
          )}
        />
         <Route
          exact
          path="/template"
          component={(props) => (
            <DetailTemplate {...props} />
          )}
        />
      </BrowserRouter>

     
    </Wrapper>
  );
}

export default App;
/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>    <NavBar/>*/
