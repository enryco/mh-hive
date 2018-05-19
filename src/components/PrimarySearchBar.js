import React, { Component } from 'react'
import Input from './Input'
import Label from './Label'

const PrimarySearchBar = props => {
  const { onChange, placeholder } = props

  return (
    <div>
      <Label>
        <div style={{ marginRight: 10 }}>🔍</div>
        <div>Need something specific?</div>
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
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  )
}



export default PrimarySearchBar