import React, { Component } from 'react'
import Label from './general/Label'
import slugify from 'slugify'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'
import { Route } from 'react-router-dom'

import _ from 'lodash'
import { CaretDown } from './general/fontawesomes'

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

  }

  componentWillReceiveProps(nextProps) {
    this.handleCategories(nextProps.items)
  }

  getSelected = () => {
    const slug = this.props.history.location.pathname.split('/')[1]
    return slug ? this.state.categories[slug] : 'Select category'
  }

  navigate = (slug) => {

    const { history, match } = this.props

    history.push(`/${slug}`)
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

    const { items, history, match } = this.props
    const { isOpened } = this.state
    const styles = this.styles

    return (
      <div style={{ margin: 5,  flex: '1' }}>
        <Label>
          <div style={{ marginRight: 5 }}>🎯</div>
          <div>Pillar</div>
        </Label>
        <div style={styles.list} >
          <Selector index={0} onClick={() => this.handleCollapse()} >{this.getSelected()}</Selector>
        </div>

        <Collapse isOpened={this.state.isOpened} springConfig={presets.stiff}  >

          <div style={styles.list}>
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

const Selector = props => {
  return <div
    style={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 17,
      fontWeight: 'bold',
      color: '#333333',
      height: 44,
      borderRadius: 6,
      backgroundColor: '#7bd7e5',
      cursor: 'pointer'
    }}
    onClick={props.onClick} >
    {props.children}<CaretDown style={{ marginLeft: 5 }} />
  </div>
}

const Item = props => {
  return <div
    style={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 10,
      fontSize: 17,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: props.index > -2 ? '#333333' : '#FFF',
      height: 44,
      borderBottomLeftRadius: props.lastItem ? 6 : 0,
      borderBottomRightRadius: props.lastItem ? 6 : 0,
      borderTopLeftRadius: props.index === 0 ? 6 : 0,
      borderTopRightRadius: props.index === 0 ? 6 : 0,
      backgroundColor: props.selected ? 'lightgrey' : '#ffffff',
      cursor: 'pointer',
      borderBottom: props.lastItem ? '' : '1px solid lightgrey'
    }}
    onClick={props.onClick} >
    {props.children}
  </div>
}
