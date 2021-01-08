import React from "react";

class App extends React.Component{

    state = {
        counter: 1
    }

    constructor(props) {
        super(props);

    }

    counterUp = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div>
            <p>{this.props.data}</p>
            <h1>{this.state.counter}</h1>
            <button onClick={this.counterUp}>Up</button>
        </div>;
    }
}

export default App;
