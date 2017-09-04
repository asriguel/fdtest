import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ProductPage from './components/ProductPage';
import {  BrowserRouter, Route  } from 'react-router-dom';
import Header from './components/Header';

const PrimaryLayout = () => (
    <div className="primary-layout">
       <Header/>
        <main>
            <Route path="/" exact component={App} />
            <Route path="/products/:id" component={ProductPage} />
        </main>
    </div>
)



ReactDOM.render(
    <BrowserRouter>
       <PrimaryLayout/>
    </BrowserRouter>
    , document.getElementById('root'));
