import "./App.css";
import Home from "./pages/clientui/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./pages/clientui/Home/Page/Page";
import Shop from "./pages/clientui/Home/Shop/Shop";
import Products from "./pages/clientui/Home/Products/Products";
import Login from "./pages/clientui/Login/Login/Login";
import Register from "./pages/clientui/Login/Register/Register";
import Dashboard from "./pages/dashboard/Dashboard/Dashboard";
import Navigation from "./pages/clientui/Shared/Navigation/Navigation";
import Footer from "./pages/clientui/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/profile">
            <Home />
          </Route>
          <Route path="/account">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
