import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { withRouter } from 'react-router-dom'
import BackButton from './BackButton'

class Header extends Component {

  state = {

  }

  render() {

    const { onClick, location } = this.props

    const pillar = location.pathname.split('/')[1]

    return (
      <div style={styles.main}>
        {
          pillar && <BackButton />
        }
        <img src={logo} alt="" style={styles.img} onClick={onClick} />
        <div style={styles.title}>
          <div>hive</div>
          {
            pillar && <div style={styles.category} >{pillar}</div>
          }
        </div>
      </div>
    )
  }
}

const HeaderWithRouter = withRouter(Header)
export default HeaderWithRouter

const styles = {
  main: {
    height: 60,
    background: '#43c6db',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    paddingLeft: 9,
  },
  img: {
    height: "100%",
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
