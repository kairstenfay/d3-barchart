import React from 'react';
import * as d3 from "d3";
const parseTime = d3.timeParse("%Y-%m-%d");


export default function(props) {
    return (coords, index) => {

        const rectangleProps = {
            x: props.xScale(parseTime(coords[0])),  // todo
            y: props.yScale(coords[1]),
            width: 1, // props.xScale,
            height: 300 - 40 - props.yScale(coords[1]), //  - props.yScale, todo import styles
            key: index,
        };
        return <rect className="bar" data-date={coords[0]} data-gdp={coords[1]} {...rectangleProps} />;
    };
};