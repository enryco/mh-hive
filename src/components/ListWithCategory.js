import React, { Component } from 'react'
import _ from 'lodash'
import { Switch, Link, Route, withRouter } from 'react-router-dom'
import slugify from 'slugify'

import SecondarySearchBar from './SecondarySearchBar'
import PolicyListItem from './PolicyListItem'
import SingleView from './SingleView'

class ListWithCategory extends Component {

  state = {

  }

  filterByCategory = (items, category) => {
    if  (category==='all') return items

    return _.filter(items, item => {
      const itemCategory = slugify(item.fields.Category, {lower: true})
      return itemCategory === category
    })
  }

  renderItem = (item, key, match) => {
    const props = {
      item,
      key,
      match
    }

    switch (match.params.pillar) {
      case 'policy': return <PolicyListItem {...props} />

      default: return null
    }
  }

  render() {

    const { items } = this.props

    return (
      <div>
        <Switch>
          <Route exact path={`/:pillar/:category`} render={({ match }) => _.map(this.filterByCategory(items, match.params.category), (item, key) => this.renderItem(item, key, match))} />
          <Route exact path={`/:pillar/:category/:id`} render={({ match }) => <SingleView item={_.get(items, `${match.params.id}.fields`)} />} />
        </Switch>
      </div>
    )
  }
}

const ListWithCategoryWithRouter = withRouter(ListWithCategory)

export default ListWithCategoryWithRouter



