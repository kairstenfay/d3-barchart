import React       from 'react';
import ScatterPlot from './BarChart';
import transformData from '../actions/transformData';

const styles = {
    width   : 500,
    height  : 300,
    padding : 40,
};


export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
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

    render() {

        return (
        <div>
]            <ScatterPlot {...this.state} {...styles} />
        </div>
        )
    }
}
