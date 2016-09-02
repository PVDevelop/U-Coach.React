import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, Link, browserHistory} from "react-router";
import Home from './home.jsx';
import LogonForm from "./logon.jsx";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/logon" component ={LogonForm} /> 
    </Router>,
    document.getElementById('example')
);