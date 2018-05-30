import React from 'react'
import PillarButton from './general/PillarButton'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import slugify from 'slugify';

import pillarInnovation from "../assets/pillar-innovation.png"
import pillarEducation from "../assets/pillar-mission.png"
import pillarPolicy from "../assets/pillar-policy.png"
import pillarResearch from "../assets/pillar-research.png"

import PrimarySearchBar from './general/PrimarySearchBar'
import Button from './general/Button'
import Label from './general/Label'


const Pillars = props => {

  const images = {
    Innovation: pillarInnovation,
    "Education & Learning": pillarEducation,
    Policy: pillarPolicy,
    Research: pillarResearch,
  }

  const styles = {
    container: {
      paddingTop: '50px',
      display: 'grid',
      gridTemplateAreas: `
      ". label label ."
      ". Education Policy ."
      ". Innovation Research ."
      ". sb sb ."`,
      gridTemplateColumns: 'auto 1fr 1fr auto',
      gridTemplateRows: 'auto 1fr 1fr auto',
      gridGap: '1em',
    },
    img: {
      height: 64,
      margin: 10
    }
  }

  return (
    <div className="mh-pillars" style={styles.container}>
      <div style={{ gridArea: 'label' }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
        }}>
          Welcome to the Hive
        </div>
        <p>
          Explore these 4 pillars of progress! <br />
          Get a broad range of evidence-based research around menstrual health,
          creative or innovative educational approaches,
          a catalog of global menstrual products, technologies & service
          and discover the different menstruation-related policies around the world.
        </p>
        <Label >
          <span style={{ marginRight: 5 }} role="img" aria-label="bullseye">🎯</span>
          <div>Pillars</div>
        </Label>
      </div>
      {
        _.map(props.items, (item, index) => {

          const gridArea = item !== 'Education & Learning' ? item : 'Education'
          return (
            <div style={{ gridArea }} key={index} >
              <Link to={'/' + slugify(item, { lower: true })} >
                <PillarButton>
                  <img src={images[item]} alt="" style={styles.img} />
                  {item}
                </PillarButton>
              </Link>
            </div>)
        }
        )
      }

      <div style={{ gridArea: 'sb', display: '' }} >
        <PrimarySearchBar
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />

        <div style={{ fontSize: 17, marginTop: 81 }}>
          <Label style={{ gridArea: 'label' }}>
            <span style={{ marginRight: 5 }} role="img" aria-label="forward">⏭</span>
            <div>Leave the Hive</div>
          </Label>
          <Button onClick={() => window.location.href = 'https://mhhub.org'} >Back to the MH Hub</Button>
        </div>
        <br />
        <div >
          <Label style={{ gridArea: 'label' }}>
            <span style={{ marginRight: 5 }} role="img" aria-label="judge">{_.sample(['👩‍⚖️','👨‍⚖️'])}</span>
            <div>Legal notice</div>
          </Label>
          © 2018 Menstrual Health Hub. Visit <a href="https://mhhub.org">https://mhhub.org</a> for more information.
      </div>
      </div>


    </div>
  )
}

export default Pillars
