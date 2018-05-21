import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  state = {

  }

  render() {

    const { onClick, location } = this.props

    const category = location.pathname.split('/')[1]

    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
          <img src={logo} alt="" style={styles.img} onClick={onClick} />
          <div style={styles.title}>
            <div>hive</div>
            {
              category && <div style={styles.category} >{category}</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

const HeaderWithRouter = withRouter(Header)
export default HeaderWithRouter

const styles = {
  wrapper: {
    marginBottom: 60,
  },
  main: {
    height: 60,
    background: '#43c6db',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
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
