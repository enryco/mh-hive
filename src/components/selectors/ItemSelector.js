import React from 'react'
import { CaretDown } from '../general/fontawesomes'

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

export default Selector
