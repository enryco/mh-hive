import React, { Component } from 'react'
import PillarButton from './general/PillarButton'
import { Switch, Link, Route, withRouter } from 'react-router-dom'
import _ from 'lodash'
import slugify from 'slugify';




const Pillars = props => {

  const styles = {
    container: {
      marginTop: '3em',
      display: 'grid',
      gridTemplateAreas: `
      ". Education Policy ."
      ". Innovation Research ."
      `,
      gridGap: '1em',
    },
  }

  return (
    <div style={styles.container}>
      {
        _.map(props.items, (item, index) => <div style={{ gridArea: item}} key={index} >
          <Link to={'/' + slugify(item, { lower: true })} >
            <PillarButton>{item}</PillarButton>
          </Link>
        </div>
        )
      }
    </div>
  )
}

export default Pillars
