// unfinished/src/components/data-circles.jsx
import React from 'react';

const renderCircles = (props) => {
    return (coords, index) => {
        console.log(coords);

        const circleProps = {
            x: props.xScale(coords[0]),
            y: props.yScale(coords[1]),
            width: 1, // props.xScale,
            height: 300 - 40 - props.yScale(coords[1]), //  - props.yScale, todo import styles
            key: index
        };
        return <rect {...circleProps} />;
    };
};

export default (props) => {
    return <g>{ props.data.map(renderCircles(props)) }</g>
}