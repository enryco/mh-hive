import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import firebase from './firebase'

import _ from 'lodash'

import BackButton from './components/BackButton'
import CategoryList from './components/CategoryList'
import PolicyList from './components/PolicyList'
import Header from './components/Header'
import InnovationList from './components/InnovationList'
import PillarButton from './components/PillarButton'
import SingleView from './components/SingleView'
import PrimarySearchBar from './components/PrimarySearchBar'
import SecondarySearchBar from './components/SecondarySearchBar'


import { datadump } from './datadump'

class App extends Component {

  state = {
    data: datadump,
    isLoading: false,
  }

  componentDidMount() {
    // firebase.database().ref().once('value').then(snap => {
    //   this.setState({ data: snap.val(), isLoading: false })
    // })
  }

  render() {

    const { data, isLoading } = this.state

    return (
      <div className="App">
        <Header onClick={() => null} />

        {
          isLoading ?
            'loading...' :
            <Switch>
              <Route path='/policy' render={() => <PolicyList items={_.get(data, 'Policy')} />} />

            </Switch>
        }
      </div>
    );
  }
}

export default App;

