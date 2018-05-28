import React, { Component } from 'react'
import { TimesCircle } from './fontawesomes';
class Input extends Component {

  state = {
    value: '',
    timeout: 0,
  }

  componentDidMount() {
    const defaultValue = this.props.defaultValue
    if (defaultValue) this.setState({ value: defaultValue })
    this.input.focus()
  }
  handleChange = e => {
    const value = e.target.value
    clearTimeout(this.state.timeout)
    const timeout = setTimeout(() => this.props.onChange && this.props.onChange(value), 500)
    this.setState({ value, timeout })
  }

  render() {

    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 17
        }}
      >
        <input
          ref={e => this.input = e}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          style={{
            width: "100%",
            border: "0",
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#505050',
            outline: 'none',
            fontSize: 'inherit'

          }}
        />
        {
          this.state.value && <div
            style={{
              cursor: 'pointer',
              color: '#333'
            }}
            onClick={() => { this.input.value = ''; this.handleChange({ target: this.input }) }}
          >
            <TimesCircle />
          </div>
        }

      </div>
    )
  }
}

export default Input
