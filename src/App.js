import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import firebase from './firebase'

import _ from 'lodash'

import SelectCategories from './components/SelectCategories'
import SelectPillars from './components/SelectPillars'
import ListWithCategory from './components/ListWithCategory'
import List from './components/List'
import Header from './components/Header'
import Pillars from './components/Pillars'
import PrimarySearchBar from './components/PrimarySearchBar'


import { datadump } from './datadump'

class App extends Component {

  state = {
    data: datadump,
    isLoading: false,
    headerHeight: 0,
  }

  headerRef = null
  contentRef = null

  componentDidMount() {
    // firebase.database().ref().once('value').then(snap => {
    //   this.setState({ data: snap.val(), isLoading: false })
    // })
    this.setHeaderHeight()

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.headerHeight !== this.headerRef.clientHeight) this.setHeaderHeight()
  }

  setHeaderHeight = () => {
    this.setState({
      headerHeight: this.headerRef ? this.headerRef.clientHeight : 0
    })
  }

  render() {

    const { data, isLoading, headerHeight } = this.state

    console.log(headerHeight)




    return (
      <div className="App">
        <div
          ref={e => this.headerRef = e}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
          }}>
          <Header onClick={() => null} />


        </div>

        <div
          ref={e => this.contentRef = e}
          style={{
            marginTop: headerHeight,
          }}
        >
          {
            isLoading ?
              'loading...' :
              <div>
                <Route exact path='/' render={() => <Pillars items={_.keys(data)} />} />

                <div className="mh-app-select-and-search" style={{ margin: 5, }}>
                  <div className="mh-app-select-area" style={{ flex: "auto", }}>
                    <Route path='/:pillar' render={({ match, history }) => <SelectPillars match={match} history={history} items={_.keys(data)} />} />
                    <Route path='/policy' render={({ match, history }) => <SelectCategories match={match} history={history} items={getSelectCategories(_.get(data, 'Policy'))} />} />
                    <Route path='/education' render={({ match, history }) => <SelectCategories match={match} history={history} items={getSelectCategories(_.get(data, 'Education'))} />} />
                    <Route path='/innovation' render={({ match, history }) => <SelectCategories match={match} history={history} items={getSelectCategories(_.get(data, 'Innovation'))} />} />
                  </div>
                  <Route path='/:pillar' component={PrimarySearchBar} />
                </div>

                <Route path='/policy' render={() => <ListWithCategory items={_.get(data, 'Policy')} />} />
                <Route path='/education' render={() => <ListWithCategory items={_.get(data, 'Education')} />} />
                <Route path='/innovation' render={() => <ListWithCategory items={_.get(data, 'Innovation')} />} />
                <Route path='/research' render={() => <List items={_.get(data, 'Research')} />} />

              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;



const getSelectCategories = table => {
  const Selectcategories = {}

  _.map(table, row => {
    const category = _.get(row, 'fields.Category')
    if (category) Selectcategories[category] = true
  })
  return _.map(Selectcategories, (cat, key) => key)
}
