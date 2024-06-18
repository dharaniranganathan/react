import React,{ Component } from "react";

export default class LifeCycleDemo extends Component{
    constructor(){
        super();
        this.state={data:20,isComponentVisible: true     }
    }
    toggleComponentVisibility = () => {
        this.setState(prevState => ({
            isComponentVisible: !prevState.isComponentVisible
        }));
    };
        /*static getDerivedStateFromProps(props,state){
            return {data:props.color}
        }*/
    componentDidMount(){
        alert('Component has mounted');
        setTimeout(() => {
            this.setState({data: "yellow"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Before the update, the favorite was " + prevState.data);
    }
    componentDidUpdate() {
        console.log("The updated favorite is " + this.state.data);
    }
    componentWillUnmount(){
        console.log("Component is unmounted")
    }

    render(){
        return <div className={this.props.className}>This is life cycle demo
            <button onClick={()=> this.setState({ data: 250})} >Change Data</button>
            <br/> Props are {this.state.data}

        </div>;
    }
}
