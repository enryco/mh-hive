import React, { Component } from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'

import firebase from './firebase'

import _ from 'lodash'

import SelectCategories from './components/SelectCategories'
import SelectPillars from './components/SelectPillars'
import ListWithCategory from './components/ListWithCategory'
import List from './components/List'
import Header from './components/Header'
import Pillars from './components/Pillars'
import PrimarySearchBar from './components/PrimarySearchBar'
import slugify from 'slugify';
import SingleView from './components/SingleView'

// import { datadump } from './datadump'

class App extends Component {

  state = {
    data: {},
    isLoading: true,
    headerHeight: 0,
    search: '',
  }

  headerRef = null
  contentRef = null

  componentDidMount() {
    firebase.database().ref().once('value').then(snap => {
      this.setState({ data: snap.val(), isLoading: false })
    })
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

  filterSearch = data => {
    const search = this.state.search.toLocaleLowerCase()

    if (!search) return data

    // preselect category all if none is selected
    if (this.props.history.location.pathname.split('/').length < 3) this.props.history.push(this.props.history.location.pathname + '/all')

    return _.filter(data, (record, key) => {

      let found = false

      const recursivlyFind = entry => {

        if (found) return null
        if (_.isObject(entry)) return _.forEach(entry, recursivlyFind)
        if (_.isString(entry)) {
          if (entry.toLocaleLowerCase().indexOf(search) !== -1) {
            found = true
          }
        }
      }

      recursivlyFind(record)

      return found

    })
  }

  render() {

    const { data, isLoading, headerHeight } = this.state

    const tableNames = {}
    _.forEach(_.keys(data), key => tableNames[slugify(key, { lower: true })] = key)

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
          <Header onClick={() => null} items={_.keys(data)} />


        </div>

        <div
          ref={e => this.contentRef = e}
          style={{
            marginTop: headerHeight,
          }}
        >
          {
            isLoading ?
              <div style={{ fontSize: 17, textAlign: 'center', paddingTop: 30 }}><span style={{ fontSize: 42 }}>💃</span><br />Fetching data.. </div> :
              <div>

                <Route exact path='/' render={() => <Pillars items={_.keys(data)} />} />

                <Route path='/:pillar' render={({ match, history }) => (
                  <div className="mh-app__select" style={{ margin: 5, }}>
                    <SelectPillars match={match} history={history} items={_.keys(data)} />
                    <SelectCategories match={match} history={history} items={getSelectCategories(_.get(data, tableNames[match.params.pillar]))} />
                    <PrimarySearchBar onChange={value => this.setState({ search: value })} />
                    <ListWithCategory items={this.filterSearch(_.get(data, `${tableNames[match.params.pillar]}`))} />
                  </div>)
                } />

                <Route path={`/:pillar/:category/:id`} render={({ match }) => <div className="mh-app__single-view">
                  <SingleView item={_.get(data, `${tableNames[match.params.pillar]}.${match.params.id}.fields`)} />
                </div>} />

              </div>
          }
        </div>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;





const getSelectCategories = table => {
  const Selectcategories = {}

  _.map(table, row => {
    const category = _.get(row, 'fields.Category')
    if (category) Selectcategories[category] = true
  })
  return _.map(Selectcategories, (cat, key) => key)
}
