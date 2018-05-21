import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const Button = props => {

  const { match, history } = props

  return <button style={styles.button} onClick={history.goBack} >⬅️ Back</button>

}


const ButtonWithRouter = withRouter(Button)

export default ButtonWithRouter


const styles = {
  button: {
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
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginBottom: 10,
    marginTop: 10,
  },
}

