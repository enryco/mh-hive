import React, { Component } from 'react'

class SingleView extends Component {

  renderItem = key => {

  // exlude certain items
  switch (key) {
    case "id": return
    default: break
  }

  return (<div
    key={key}
    style={{
      marginBottom: 10
    }}>
    <div style={{
      fontFamily: 'OpenSans',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#db5644',
    }}>{key}</div>
    <div
      style={{
        fontFamily: 'OpenSans',
        fontSize: 15,
        color: '#666666',
      }}
    >{this.props.item[key]}</div>
  </div>)

}

  render() {

    const { item } = this.props

    return (
      <div className="mhh-single-view">
        {
          Object.keys(item).map(this.renderItem)
        }
      </div>
    )
  }
}

export default SingleView

