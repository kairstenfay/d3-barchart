import React  from 'react';
import Axis   from './Axis';

export default (props) => {
    const xSettings = {
        translate: `translate(0, ${props.height - props.padding})`,
        scale: props.xScale,
        orient: 'bottom',
        id: 'x-axis'
    };
    const ySettings = {
        translate: `translate(${props.padding}, 0)`,
        scale: props.yScale,
        orient: 'left',
        id: 'y-axis'
    };
    return (
        <g className="xy-axis">
            <Axis {...xSettings} />
            <Axis {...ySettings} />
        </g>
    )
}