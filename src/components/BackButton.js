import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ChevronLeft } from './general/fontawesomes';

const Button = props => {

  const goBack = () => history.push(history.location.pathname.slice(0, history.location.pathname.lastIndexOf('/')))


  const { match, history } = props

  return <button style={styles.button} onClick={goBack} ><ChevronLeft style={{ marginRight: 5 }} />{'Back'}</button>

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
    background: '#FFF',
    borderRadius: 6,
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    color: '#db5644',
    textAlign: "center",
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginBottom: 10,
    marginTop: 10,
  },
}
