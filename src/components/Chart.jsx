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
                this.setState({ data })
            })
            .catch(console.error)
    }

    toggleToolTip(e) {
        let target = e.target;

        this.setState({
            showToolTip: !this.state.showToolTip,
            toolTipText: renderToolTip(target.attributes)
        })
    }

    render() {

        return (
        <div>
            <BarChart {...this.state} {...styles} toolTipAction={this.toggleToolTip} />

            {(this.state.showToolTip) ? this.state.toolTipText : null }

        </div>
        )
    }
}

function renderToolTip(attributes) {
    return (
        <div id="tooltip" data-date={attributes[1].nodeValue}>
            <span className="tooltiptext">{attributes[1].nodeValue}</span>
        </div>
    );
}