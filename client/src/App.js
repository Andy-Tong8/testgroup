import React, { useEffect } from 'react';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';
import { Router, navigate } from '@reach/router'
import Dashboard from './components/Dashboard'
import Form from './components/Form'


function App() {
    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <div className="App">
            <h1>Project Manager</h1>
            <Router>
                <Dashboard path="/" />
                <Form path="/projects/new" />
            </Router>
        </div>
    );
}

export default App;
