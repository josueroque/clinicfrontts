import React, { Component } from 'react';
import {UsersContext} from '../context/UsersContext';
import  { Redirect } from 'react-router-dom' 

export default (ChildComponent: any) => {
  class ComposedComponent extends Component  {
    // Our component just got rendered
    static contextType = UsersContext;
    
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() { 
      const {auth} : any = this.context;
     
      if (!auth) {
        //this.props.history.push('/login');
        return <Redirect to='/login'  />
      }
      if (!auth.token) {
//        this.props.history.push('/login');
          return <Redirect to='/login'  />
 
      }

    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;

};