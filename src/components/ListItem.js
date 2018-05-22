import React, { Component } from 'react'
import { ChevronRight } from './general/fontawesomes';
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Item = props => {
  const styles = {
    container: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontFamily: 'OpenSans',
      fontSize: 15,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#333',
      height: 70,
      borderBottom: "1px solid grey",
      marginLeft: 10,
      paddingBottom: 10,
      paddingTop: 10,
      cursor: 'pointer',
    },
    content: {
      flex: 'auto',
      overflow: 'hidden',
      marginRight: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 4,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      lineHeight: '1.2em',
      maxHeight: '1.2em',
    },
    description: {
      lineHeight: '1.2em',
      maxHeight: '2.4em',
      color: 'grey'
    }
  }

  if (!props.item.fields) return null

  const { Title, About, Description } = props.item.fields


  return (
    <Link to={`${props.match.url}/${props.item.id}`}>
      <div style={styles.container} >
        <div style={styles.content}>
          <div style={styles.title}>
            {Title}
          </div>
          <div style={styles.description} >
            {About || Description}
          </div>
        </div>
        <div style={{ marginRight: 10 }}><ChevronRight /></div>
      </div>
    </Link>
  )
}


export default Item


