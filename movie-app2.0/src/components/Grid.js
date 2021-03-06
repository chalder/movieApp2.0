import React from 'react'

const Grid = ({ header, children }) => (
    <div className='grid'>
        <h1>{header}</h1>
        <div className='grid-content'>{children}</div>
    </div>
)
export default Grid;

