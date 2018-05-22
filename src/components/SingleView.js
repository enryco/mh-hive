import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import ReactCountryFlag from 'react-country-flag'
import Linkify from './general/Linkify'

class SingleView extends Component {

  renderItem = (header, index, headersArray) => {

    const item = this.props.item

    let content = item[header]
    if (!content) return null
    if (_.isPlainObject(content)) return null
    if (_.isArray(content)) content = _.reduce(content, (item, acc) => acc += ', ' + item )

    // format or exclude some fields
    switch (header) {
      case "Country": content = item.isoCountryCode ? <span><ReactCountryFlag code={item.isoCountryCode} />{' ' + content}</span> : content
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

    const { item, match } = this.props
    const pillar = match.params.pillar

    if (!item) return null

    return (
      <div style={{ margin: 10 }} >
        <Linkify>
          {
            _.map(headers[pillar], this.renderItem)
          }
        </Linkify>
      </div>
    )
  }
}

const SingleViewWithRouter = withRouter(SingleView)

export default SingleViewWithRouter



const headers = {
  education: [
    "Title",
    "Visual",
    "Authors",
    "Organization",
    "Link",
    "About",
    "Relevant locations",
    "Category",
    "Description",
    "Date or year",
    "Keywords",
    "Comments",
  ],
  innovation: [
    "Title",
    "Logo",
    "Category",
    "Link",
    "Description",
  ],
  research: [
    "Title",
    "Authors",
    "Year",
    "Citation",
    "Url",
    "Open acess",
    "Location of study",
    "About",
    "Digital badges",
    "Keywords",
    "Type of research",
    "Comments",
  ],
  policy: [
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
  ],
}
