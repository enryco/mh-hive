import React from 'react'
import Input from './general/Input'


const SecondarySearchBar = props => {
  const { onChange, placeholder } = props

  return (<div style={{
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: "44px",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "solid 1px #43c6db",
    paddingLeft: 10,
    paddingRight: 10,
  }} >
    <Input
      placeholder={placeholder}
      onChange={onChange}
    />
    <span role="img" aria-label="magnifying glas">🔍</span>
  </div>
  )
}



export default SecondarySearchBar
