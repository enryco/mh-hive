import React, { Component } from 'react'

class PillarButton extends Component {

  state = {

  }

  render() {

    return (
      <div style={style.main} onClick={this.props.onClick} >
        {this.props.children}
      </div>
    )
  }
}

export default PillarButton


const style = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 130,
    height: 80,
    background: '#43C6DB',
    borderRadius: 6,
    fontFamily: "OpenSans-Bold",
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
  },
}

