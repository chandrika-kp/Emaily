import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import SurveyNew from './Components/SurveyNew';
import Header from './Components/Header';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' Component={Landing} />
          <Route exact path='/surveys' Component={Dashboard} />
          <Route exact path='/surveys/new' Component={SurveyNew} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
