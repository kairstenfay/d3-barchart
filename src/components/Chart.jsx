import React       from 'react';
import BarChart from './BarChart';
import transformData from '../actions/transformData';

const styles = {
    width: 500,
    height: 300,
    padding: 40,
    showToolTip: false
};


export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.toggleToolTip = this.toggleToolTip.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

        fetch(url)
            .then(res => res.json())
            .then(jsonData => {
                let data = jsonData.data;
                data = transformData(data);
                this.setState({ data })
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        let target = e.target;

        this.setState({
            showToolTip: true, // !this.state.showToolTip,
            toolTipText: renderToolTip(target.attributes)
        })
    }

    render() {

        return (
        <div>
            <BarChart {...this.state} {...styles} toolTipAction={this.toggleToolTip} />

            {(this.state.showToolTip) ? this.state.toolTipText : <div id="tooltip">Hover over a bar!</div>}

            {this.state.showToolTip ? this.state.toolTipText : <div><span></span></div>}
        </div>
        )
    }
}


function renderToolTip(attributes) {
    if (attributes[1]) {
        return (
            <div id="tooltip" data-date={attributes[1].nodeValue}>
                <span className="tooltiptext">{attributes[1].nodeValue}</span>
            </div>
        );
    } else {
        return (
        <div className="tooltip" onMouseOver={this.toggleToolTip} onMouseOut={this.toggleToolTip} >
            Hover over me
            {(this.state.showToolTip) ? this.state.toolTipText : <span></span>}
        </div>
        )
    }
}