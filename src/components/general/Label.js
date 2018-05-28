import React from 'react'

const Label = props => {
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: "#ffffff",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 4,
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#505050',
            ...props.style
        }} >
            {props.children}
        </div>
    )
}

export default Label
