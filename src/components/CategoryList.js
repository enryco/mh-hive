import React, { Component } from 'react'
import Label from './Label'

class CategoryList extends Component {

  state = {
    selected: ''
  }

  render() {

    const { items, onSelect } = this.props

    return (
      <div>
        <Label>
          <div style={{ marginRight: 10 }}>⚗️</div>
          <div>Select a Category</div>
        </Label>
        <div style={{
          borderRadius: 6,
          backgroundColor: '#ffffff',
          border: 'solid 1px #43c6db',
        }} >
          {
            items.map((e, i) => <Item
              key={i}
              index={i}
              lastItem={i + 1 === items.length}
              onClick={() => onSelect(e)}

            >{e}</Item>)
          }
        </div>
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
      color: '#333333',
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