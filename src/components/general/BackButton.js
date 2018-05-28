import React from 'react'
import { withRouter } from 'react-router-dom'
import { ChevronLeft } from './fontawesomes';

const Button = props => {

  const goBack = () => history.push(history.location.pathname.slice(0, history.location.pathname.lastIndexOf('/')))


  const { history } = props

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
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 17,
    background: 'rgb(123, 215, 229)',
    color: '#333',
    textAlign: "center",
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginBottom: 10,
    marginTop: 10,
  },
}
