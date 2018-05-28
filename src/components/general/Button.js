import React from 'react'

const Button = props => {

  const { onClick } = props

  return <button style={styles.button} onClick={onClick} >{props.children}</button>

}



export default Button


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
