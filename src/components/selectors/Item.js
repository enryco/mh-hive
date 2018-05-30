import React from 'react'

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

export default Item
