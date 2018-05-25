import React, { Component } from 'react'

class PillarButton extends Component {

  state = {

  }

  render() {

    return (
      <div style={style.main} className="mh-pillar-button" onClick={this.props.onClick} >
        {this.props.children}
      </div>
    )
  }
}

export default PillarButton


const style = {
  main: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#43C6DB',
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
    height: "100%",
    paddingRight: 10,
  },
}

