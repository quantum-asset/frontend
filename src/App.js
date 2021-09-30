import {  useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import DefaultMainPage from "./components/DefaultMainPage/DefaultMainPage";

import SideBar from "./components/SideBar/SideBar";
import SideBarMobile from "./components/SideBarMobile/SideBarMobile";

function App() {
  const [open, setOpen] = useState(false);
  const handleCLose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <SideBar />

      <DefaultMainPage open={open} onOpenSideBar={()=>{setOpen(true)}} >
          
      </DefaultMainPage>
      <SideBarMobile open={open} onClose={handleCLose} />
    
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
