import "./App.css";
import Header from "./containers/Header";
import Productcomponent from "./containers/Productcomponent";
import ProductDetail from "./containers/ProductDetail";
import Productlist from "./containers/Productlist";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ApiCall from "./containers/ApiCall";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route  path="/" exact component={Productlist} />
          <Route  path="/product/:productId" exact component={ProductDetail} />
          <Route  path="/Productcomponent" exact component={Productcomponent} />
          <Route path="/apicall" exact component={ApiCall} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
