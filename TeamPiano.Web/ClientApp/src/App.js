import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Layout';
import  Home  from './pages/Home';
import  Schedule  from './pages/Schedule';
import  FAQs  from './pages/FAQs';
import  ContactUs  from './pages/ContactUs';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/FAQs' component={FAQs} />
            <Route exact path='/contactus' component={ContactUs} />
      </Layout>
    );
  }
}
