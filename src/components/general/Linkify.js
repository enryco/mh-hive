import React from 'react'
import ReactLinkify from 'react-linkify';
import LinkifyDecorator from './LinkifyDecorator'

const Linkify = props => <ReactLinkify component={LinkifyDecorator} >{props.children}</ReactLinkify>

export default Linkify
