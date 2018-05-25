import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { withRouter } from 'react-router-dom'
import BackButton from './general/BackButton'
import slugify from 'slugify';
import _ from 'lodash'

class Header extends Component {

  state = {

  }

  render() {

    const { onClick, location, items } = this.props

    const pillar = location.pathname.split('/')[1]

    const pillarName = _.find(items, item => slugify(item, {lower: true}) === pillar)


    return (
      <div style={styles.main}>
        <img src={logo} alt="" style={styles.img} onClick={() => this.props.history.push('/')} />
        <div style={styles.title}>
          <div>hive</div>
          {
            pillar && <div style={styles.category} >{pillarName}</div>
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
