import React from 'react';

export default function(props) {
    return (coords, index) => {

        const rectangleProps = {
            x: props.xScale(coords[0]),
            y: props.yScale(coords[1]),
            width: 1, // props.xScale,
            height: 300 - 40 - props.yScale(coords[1]), //  - props.yScale, todo import styles
            key: index,
        };
        return <rect className="bar" data-date={coords[0]} data-gdp={coords[1]} {...rectangleProps} />;
    };
};