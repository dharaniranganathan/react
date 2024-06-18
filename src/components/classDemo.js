import React,{ Component } from "react";

export default class ClassDemo extends Component{
    constructor(){
        super();
        this.state={data:20}
    }
    render(){
        return <div className={this.props.className}>This is class demo
            <br/> Props are {this.props.states}
            <button onClick={()=> this.setState({ data: 250})} >Change</button>
            <br/> Props are {this.state.data}

        </div>;
    }
}
