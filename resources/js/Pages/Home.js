import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

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
            <InertiaLink href="/about">About</InertiaLink>
            <h1>{this.state.counter}</h1>
            <button onClick={this.counterUp}>Up</button>
        </div>;
    }
}

export default App;
