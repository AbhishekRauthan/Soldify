import React from "react";
import { Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Home from './pages/index'
import Store from "./pages/Store";
import Categories from "./pages/Categories";
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/categories" component={Categories} />
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
