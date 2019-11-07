import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cities from './componente/Cities';
import Createaccount from './componente/Createaccount';
import Body from './componente/Body';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
const routing = ( 
  <Body> 
    <div> 
      <App path = './' component = {App} /> 
      <Cities path = "/ cities" component = {Cities } /> 
      <Createaccount ruta = "/ createaccount" componente = {Createaccount} /> 
    </div> 
  </Body> 
) 
