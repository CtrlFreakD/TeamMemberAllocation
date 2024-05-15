import React, { Component } from 'react';
//import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
import './custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return (
          <>
          <Header />
          <Employees />
              <Footer />
          </>
      //<Layout>
      //  <Routes>
      //    {AppRoutes.map((route, index) => {
      //      const { element, ...rest } = route;
      //      return <Route key={index} {...rest} element={element} />;
      //    })}
      //  </Routes>
      //</Layout>

    );
  }
}
