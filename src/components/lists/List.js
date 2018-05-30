import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router-dom'
import ListItem from './ListItem'


const List = props => {

  return <Route exact={props.windowSize.width < 768} path={`/all/all`} render={({ match }) => {
    return _.map(props.items, (item, key) => <ListItem item={item} key={key} match={{ url: '/all/all' }} />)
  }} />
}

export default List




