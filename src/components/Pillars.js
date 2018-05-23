import React, { Component } from 'react'
import PillarButton from './general/PillarButton'
import { Switch, Link, Route, withRouter } from 'react-router-dom'
import _ from 'lodash'
import slugify from 'slugify';
import { LightBulb } from './general/fontawesomes';

import pillarInnovation from "../assets/pillar-innovation.png"
import pillarEducation from "../assets/pillar-mission.png"
import pillarPolicy from "../assets/pillar-policy.png"
import pillarResearch from "../assets/pillar-research.png"

import PrimarySearchBar from './PrimarySearchBar'


const Pillars = props => {

  const images = {
    Innovation: pillarInnovation,
    Education: pillarEducation,
    Policy: pillarPolicy,
    Research: pillarResearch,
  }

  const styles = {
    container: {
      paddingTop: '50px',
      display: 'grid',
      gridTemplateAreas: `
      ". Education Policy ."
      ". Innovation Research ."
      ". sb sb ."
      `,
      gridGap: '1em',
    },
    img: {
      height: 64,
      margin: 10
    }
  }

  return (
    <div style={styles.container}>
      {
        _.map(props.items, (item, index) => (
          <div style={{ gridArea: item }} key={index} >
            <Link to={'/' + slugify(item, { lower: true })} >
              <PillarButton>
                <img src={images[item]} alt="" style={styles.img} />
                {item}
              </PillarButton>
            </Link>
          </div>)
        )
      }

      <div style={{ gridArea: 'sb', display: 'none' }} >
        <PrimarySearchBar />
      </div>
    </div>
  )
}

export default Pillars
