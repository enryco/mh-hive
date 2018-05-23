import React, { Component } from 'react'

class Input extends Component {

    state = {
        value: ''
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ value })
        this.props.onChange && this.props.onChange(value)
    }

    render() {

        return (
            <div
            style={{
                height: "100%",
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    style={{
                        width: "100%",
                        border: "0",
                        fontSize: 17,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#505050',
                        outline: 'none'
                    }}
                />
            </div>
        )
    }
}

export default Input
