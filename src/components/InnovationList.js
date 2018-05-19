import React, { Component } from 'react'

class InnovationList extends Component {

  state = {

  }

  render() {

    const { items, onSelect } = this.props

    return (
      <div >
        {
          items.map((e, i) => <Item
            key={i}
            item={e}
            onSelect={() => onSelect(e.id)}
          />)
        }
      </div>
    )
  }
}

export default InnovationList


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
      color: '#666666',
      height: 70,
      borderBottom: "1px solid grey",
      marginLeft: 10,
      marginBottom: 5,
      cursor: 'pointer',
    },
    content: {
      flex: 'auto',
      overflow: 'hidden',
      marginRight: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 17,
      marginBottom: 4,
    },
    description: {
      lineHeight: '1.2em',
      maxHeight: '2.4em',

    }
  }
  
  return <div
    onClick={props.onSelect}
    style={styles.container} >
    <div style={styles.content}>
      <div style={styles.title} >{props.item.title}</div>
      <div style={styles.description} >{props.item.description}</div>
    </div >
    <div style={{ marginRight: 10 }}>▶️</div>
  </div >
}
