import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import countries from 'i18n-iso-countries'

import { ChevronRight } from '../general/fontawesomes';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Item = props => {

  if (!_.has(props, 'item.fields.Title')) return null

  const { isoCountryCode, Title, Country } = props.item.fields

  const _isoCountryCode = countries.getAlpha2Code(Country, 'en') || isoCountryCode

  console.log(`_isoCountryCode`,_isoCountryCode)


  return <Link to={`${props.match.url}/${props.item.id}`}  >
    <div style={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontSize: 15,
      fontWeight: 'bold',
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


    }} >
      <div style={{ marginRight: 10 }}>
        {_isoCountryCode && <ReactCountryFlag code={_isoCountryCode} />}
      </div>
      <div
        className="truncate"
        style={{
          flex: 'auto',
          overflow: 'hidden',
          lineHeight: '1.2em',
          maxHeight: '3.6em',
          marginRight: 10,
        }}>{Title}</div>
      <div style={{ marginRight: 10 }}> <ChevronRight /> </div>
    </div>
  </Link>

}


export default Item
