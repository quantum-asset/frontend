
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";

import { BrowserRouter, Route } from "react-router-dom";
import { useUserValue } from "./context/Sesion";
import Home from "./Pages/Home";
import AssetRouter from "./AssetRouter";


function App(props) {
//  const [{ usuario, auth }, dispatch] = useUserValue();
console.log("APP:", props);
  
  return (
    <Wrapper>
      <BrowserRouter>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path="*" component={(props) => <AssetRouter {...props} />} />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
