import React from 'react'
import blankshield from 'blankshield'

const LinkifyDecorator = (obj) => {
  const decoratedHref = obj.href
  const decoratedText = obj.children

  return (
    <a href={decoratedHref} onClick={e => { e.preventDefault(); blankshield.open(decoratedHref) }}>
      {decoratedText}
    </a>
  );
}

export default LinkifyDecorator
