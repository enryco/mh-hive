import React, { Component } from 'react'
import _ from 'lodash'
import { Route, withRouter } from 'react-router-dom'
import slugify from 'slugify'

import PolicyListItem from './PolicyListItem'
import ListItem from './ListItem'

import { getCategoryName } from '../../utils';


class ListWithCategory extends Component {

  state = {

  }

  filterByCategory = (items, category, pillar) => {
    if (category === 'all') return items

    const fieldname = getCategoryName(pillar)

    return _.filter(items, item => {

      const categoryMatch = (itemCategory, category) => slugify(itemCategory, { lower: true }) === category
      const itemCategory = _.get(item, `fields.${fieldname}`)
      if (!itemCategory) return false

      if (_.isArray(itemCategory)) {
        return _.find(itemCategory, item => categoryMatch(item, category))
      } else {
        console.log(itemCategory)

        return categoryMatch(itemCategory, category)
      }
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
      default: return <ListItem {...props} />
    }
  }

  render() {

    const { items, windowSize } = this.props

    return <Route
      exact={windowSize.width < 768}
      path={`/:pillar/:category`}
      render={({ match }) => _.map(this.filterByCategory(items, match.params.category, match.params.pillar), (item, key) => this.renderItem(item, key, match))} />


  }
}

const ListWithCategoryWithRouter = withRouter(ListWithCategory)

export default ListWithCategoryWithRouter



