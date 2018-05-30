import React, { Component } from 'react'
import slugify from 'slugify'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'
import _ from 'lodash'

import Label from '../general/Label'
import Item from './Item'
import ItemSelector from './ItemSelector'

class CategoryList extends Component {

  state = {
    categories: {
      all: 'All'
    },
    isOpened: false,
  }

  styles = {
    list: {
      backgroundColor: '#ffffff',
      border: 'solid 1px #43c6db',
      borderRadius: 6,
    }
  }

  componentDidMount() {

    this.handleCategories(this.props.items)

    // preselect all
    // if (this.props.history.location.pathname.split('/').length < 3) this.props.history.push(this.props.history.location.pathname + '/all')

    // open if mounted
    this.openCategoriesOnInitialPillar()
  }

  componentWillReceiveProps(nextProps) {
    this.handleCategories(nextProps.items)
    this.openCategoriesOnInitialPillar()

  }

  openCategoriesOnInitialPillar = () => {
    if (this.props.history.location.pathname.split('/').length < 3) this.setState({ isOpened: true })

  }

  getSelected = () => {
    const slug = this.props.history.location.pathname.split('/')[2]
    return slug ? this.state.categories[slug] : 'Select category'
  }

  navigate = (slug) => {

    const { history, match } = this.props

    history.push(`/${match.params.pillar}/${slug}`)
    this.handleCollapse()
  }

  handleCollapse = () => {
    const { isOpened } = this.state

    this.setState({
      isOpened: !isOpened
    })
  }

  handleCategories = items => {

    const categories = { ...this.state.categories }

    _.forEach(items, item => {


      const slug = slugify(item, { lower: true })

      if (!categories[slug]) {
        categories[slug] = item
      }
    })

    this.setState({ categories })
  }

  render() {

    const { items, match } = this.props
    const styles = this.styles

    return (
      <div style={{ flex: 'auto', marginRight: 10 }}>
        <Label>
          <span style={{ marginRight: 5 }} role="img" aria-label="alembic">⚗️</span>
          <div>{match.params.pillar === 'research' ? 'Best suited for' : 'Category'}</div>
        </Label>
        <div style={styles.list} >
          <ItemSelector index={0} onClick={() => this.handleCollapse()} >{this.getSelected()}</ItemSelector>
        </div>

        <Collapse isOpened={this.state.isOpened} springConfig={presets.stiff}  >

          <div style={styles.list}>

            <Item
              index={0}
              selected={'All' === this.getSelected()}
              onClick={() => this.navigate('all')} >All</Item>
            {
              _.map(items, (element, i) => < Item
                key={i}
                index={i + 1}
                lastItem={i + 1 === items.length}
                selected={element === this.getSelected()}
                onClick={() => this.navigate(slugify(element, { lower: true }))}
              >{element}</Item>
              )}
          </div>
        </Collapse>
      </div >
    )
  }
}


export default CategoryList
