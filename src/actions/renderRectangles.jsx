import React from 'react';
import * as d3 from "d3";
const parseTime = d3.timeParse("%Y-%m-%d");


export default function(props) {
    return (coords, index) => {

        const rectangleProps = {
            x: props.xScale(parseTime(coords[0])),  // todo
            y: props.yScale(coords[1]),
            width: 2, // props.xScale,
            height: props.height - props.padding - props.yScale(coords[1]),
            key: index,
        };

        const fillColor = (props.dataDate === coords[0]) ? '#ff8282' : 'grey';  // todo config

        return <rect className="bar" data-date={coords[0]} data-gdp={coords[1]} {...rectangleProps} fill={fillColor} />;
    };
};