import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from 'react-router-dom'
import Error from "./pages/Error";
import Home from './pages/index'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
