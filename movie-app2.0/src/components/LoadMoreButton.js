import React from 'react'

const LoadMoreButton = ({ text, cbk }) => (
    <button className='load-more-btn' onClick={cbk}>{text}</button>
)

export default LoadMoreButton;