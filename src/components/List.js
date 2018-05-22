import React from 'react'
import _ from 'lodash'
import { Switch, Link, Route, withRouter } from 'react-router-dom'
import slugify from 'slugify'

import SecondarySearchBar from './SecondarySearchBar'
import PolicyListItem from './PolicyListItem'
import SingleView from './SingleView'
import ListItem from './ListItem'


const List = props => {

  return (
    <div>
      <Route exact path={`/:pillar`} render={({ match }) => _.map(props.items, (item, key) => <ListItem item={item} key={key} match={match} />)} />
      <Route exact path={`/:pillar/:id`} render={({ match }) => <SingleView item={_.get(props.items, `${match.params.id}.fields`)} />} />
    </div>
  )
}

export default List



