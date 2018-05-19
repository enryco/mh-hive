import React, { Component } from 'react'
import logo from '../assets/logo.png'

class Header extends Component {

  state = {

  }

  render() {

    const { category, onClick } = this.props
    
    return (
      <div style={styles.main}>
        <img src={logo} alt="" style={styles.img} onClick={onClick} />
        <div style={styles.title}>
          <div>hive</div>
          {
            category && <div style={styles.category} >{category}</div>
          }
        </div>
      </div>
    )
  }
}

export default Header

const styles = {
  main: {
    height: 60,
    background: '#43c6db',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: "100%",
    paddingLeft: 9,
  },
  title: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    padding: 9,
    fontFamily: 'OpenSans',
    fontSize: '24px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.75',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#db5644'
  },
  category: {
    color: '#ffffff'
  }
}