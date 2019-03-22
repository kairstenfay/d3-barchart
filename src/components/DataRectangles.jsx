// unfinished/src/components/data-circles.jsx
import React from 'react';
import renderRectangles from '../actions/renderRectangles';

export default (props) => {
    return <g>{ props.data.map(renderRectangles(props)) }</g>
}