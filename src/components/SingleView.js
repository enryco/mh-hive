import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import ReactCountryFlag from 'react-country-flag'
import Linkify from './general/Linkify'

class SingleView extends Component {

  renderItem = (header, index, headersArray) => {

    const item = this.props.item

    let content = item[header]

    // format or exclude some fields
    switch (header) {
      case "Country": content = <span><ReactCountryFlag code={item.isoCountryCode} />{' ' + content}</span>
      default: break
    }

    // format certain fields
    switch (content) {
      case true: content = '✅ Yes'; break
      case false: content = 'No'; break
    }

    return (<div
      key={index}
      style={{
        marginBottom: 10
      }}>
      <div style={{
        fontFamily: 'OpenSans',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#db5644',
      }}>{header}</div>
      <div
        style={{
          fontFamily: 'OpenSans',
          fontSize: 15,
          color: '#666666',
        }}
      >{content}</div>
    </div>)

  }

  render() {

    const { item } = this.props

    if (!item) return null

    return (
      <div style={{ margin: 10 }} >
        <Linkify>
          {
            _.map(PolicyHeaders, this.renderItem)
          }
        </Linkify>
      </div>
    )
  }
}

const SingleViewWithRouter = withRouter(SingleView)

export default SingleViewWithRouter



const PolicyHeaders = [
  "Title",
  "Category",
  "Country",
  "Region or city",
  "Coordinates",
  "Type of policy",
  "Description",
  "Date of introduction",
  "Is menstruation specifically referenced?",
  "How is menstruation specifically referenced?",
  "Sector driving policy",
  "Ministry group driving policy",
  "Specific persons",
  "Status of policy",
  "Links",
]
