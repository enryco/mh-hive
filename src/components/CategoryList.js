import React, { Component } from 'react'
import Label from './Label'
import slugify from 'slugify'
import BackButton from './BackButton'
import { Collapse } from 'react-collapse';
import { presets } from 'react-motion';
import { Route } from 'react-router-dom'

class CategoryList extends Component {

  state = {
    selected: 'Select category...',
    isOpened: true,
  }

  styles = {
    list: {
      borderRadius: 6,
      backgroundColor: '#ffffff',
      border: 'solid 1px #43c6db',
      minHeight: 44
    }
  }

  navigate = (element) => {

    const { history, match } = this.props

    history.push(`${match.path}/${slugify(element, { lower: true })}`)
    this.handleCollapse(element)
  }

  handleCollapse = (element) => {
    const { isOpened, selected } = this.state
    if (!element) element = selected

    this.setState({
      selected: element,
      isOpened: !isOpened
    })
  }

  componentDidMount() {
    if (this.props.history.location.pathname.split('/').length >2) this.setState({ isOpened: false })

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.history.location.pathname.split('/').length < 3) this.setState({ isOpened: true })
  }

  render() {

    const { items, history, match } = this.props
    const { isOpened, selected } = this.state
    const styles = this.styles

    return (
      <div>
        <Label>
          <div style={{ marginRight: 10 }}>⚗️</div>
          <div>Select a Category</div>
        </Label>
        <Collapse isOpened={this.state.isOpened} springConfig={presets.noWobble} style={styles.list} >
          {
            isOpened ? null : <Item index={-2} onClick={() => this.handleCollapse()} >{selected}</Item>
          }
          <div >
            <Item index={0} onClick={() => this.navigate('All')} >All</Item>
            {
              items.map((e, i) => <Item
                key={i}
                index={i + 1}
                lastItem={i + 1 === items.length}
                onClick={() => this.navigate(e)}
              >{e}</Item>)
            }
          </div>
        </Collapse>
      </div>
    )
  }
}


export default CategoryList

const Item = props => {
  return <div
    style={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 10,
      fontFamily: 'OpenSans',
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
      borderTopLeftRadius: props.index === 1 ? 6 : 0,
      borderTopRightRadius: props.index === 1 ? 6 : 0,
      backgroundColor: props.index % 2 ? '#ffffff' : '#7bd7e5',
      cursor: 'pointer'
    }}
    onClick={props.onClick} >
    {props.children}
  </div>
}
