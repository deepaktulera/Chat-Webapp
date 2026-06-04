import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/'/>
        <Route path='/chat'/>
    </Routes>
  );
}

export default AppRoute;
