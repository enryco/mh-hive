import React, { Component } from 'react'

class EducationList extends Component {

  state = {

  }

  render() {

    const { items } = this.props

    return (
      <div >
        {
          items.map((e, i) => <Item
            key={i}
            item={e}
          />)
        }
      </div>
    )
  }
}

export default EducationList


const Item = props => {
  return <div style={{
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'OpenSans',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#666666',
    height: 70,
    borderBottom: "1px solid grey",
    marginLeft: 10,
    marginBottom: 5,
    cursor: 'pointer',


  }} >
    <div style={{ marginRight: 10 }}>{props.item.flag}</div>
    <div 
    className="truncate"
    style={{
      flex: 'auto',
      overflow: 'hidden',
      lineHeight: '1.2em',
      maxHeight: '3.6em',
      marginRight: 10,
    }}>{props.item.title}</div>
    <div style={{ marginRight: 10 }}>▶️</div>
  </div>
}
