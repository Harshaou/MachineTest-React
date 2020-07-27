import React from 'react';
import NavBar from './componenets/NavBar'
import { Route } from 'react-router-dom';
import Request from './screens/Request';
import Services from './screens/Services';
import Payments from './screens/Payments';
import './app.css'


const App = () => {
    return (
        <div>
        <NavBar />
        <div className='container'>
            <Route exact path='/' component={Request} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/payments' component={Payments} />
        </div>
        </div>
    );
}

export default App;
