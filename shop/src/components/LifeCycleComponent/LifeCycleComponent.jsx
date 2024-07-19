import React, { Component } from "react";

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("component did update");
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  increamentCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increamentCount}>Increamnet</button>
      </div>
    );
  }
}
export default LifeCycleComponent;
