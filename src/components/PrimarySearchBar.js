import React, { Component } from 'react'
import Input from './general/Input'
import Label from './general/Label'

const PrimarySearchBar = props => {
  const { onChange, placeholder, label, defaultValue } = props

  return (
    <div style={{ flex: "auto", ...props.style }}>
      <Label>
        <div style={{ marginRight: 5 }}>🔍</div>
        <div>{label ? label : 'Search'}</div>
      </Label>
      <div style={{
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
          defaultValue={defaultValue}
          placeholder={placeholder ? placeholder : '...'}
          onChange={onChange}
        />
      </div>
    </div>
  )
}



export default PrimarySearchBar
