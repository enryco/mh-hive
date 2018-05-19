import React, { Component } from 'react'

class Button extends Component {

  state = {

  }

  render() {

    return (
      <div style={styles.container} onClick={this.props.onClick} >
        {this.props.children}
      </div>
    )
  }
}

export default Button


const styles = {
  container: {
    float: "left",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingLeft: 14,
    paddingRight: 14,
    background: '#43C6DB',
    borderRadius: 6,
    fontFamily: "OpenSans-Bold",
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
  },
}

