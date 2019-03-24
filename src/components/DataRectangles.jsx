// unfinished/src/components/data-circles.jsx
import React from 'react';
import renderRectangles from '../actions/renderRectangles';

export default class DataRectangles extends React.Component {  // todo make function if this tooltip thing doesn't work out

    render() {
        return (
            <g id="rectangle-garden" onMouseOver={this.props.toolTipAction} onMouseOut={this.props.toolTipAction}>
                {this.props.data.map(renderRectangles(this.props))}
                {this.props.toolTipSVG}
            </g>
        );
    }
}