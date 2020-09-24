import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './1.webp'
import Home from './home';
import Desc from './desc'
import {BrowserRouter,Route} from 'react-router-dom';
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
              <Route exact path='/' component={Home} />
              <Route path='/desc' component={Desc} />
            </BrowserRouter>
        )
    }
}

export default App;
