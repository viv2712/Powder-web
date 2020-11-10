import React from 'react'

const Caret = ({
  color,
  height,
  width,
  style = {},
  onClick,
  degrees = 0,
  className,
}) => (
  <svg onClick={onClick} className={className} style={{ ...style, transform: `rotate(${degrees}deg)` }} width={width || 24} height={height || 24} viewBox="0 0 24 24">
    <path fill={color} d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  </svg>
)

export default Caret
