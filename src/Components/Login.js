import React, { Component } from "react";
import Header1 from "./Header1";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wr",
      login: "",
    };
    const abc = "123";
    alert('hi con');
  }

  // handleChnage=(event)=> {
  //     const {name,value}= event.target;
  //   // console.log(event.target.value);
  //   this.setState({[name]:value})

  // }
  // handleSubmit=(e)=>{
  //   e.preventDefault();
  //   <Header1
  //   header={this.state.name}
  //   />

  // }
  // clickevent=()=>{

  // }
  hnadleChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });

    //console.log(e.target.value)
  };

  handleOnclick = () => {
    // this.setState({ name: "ss" });
    // this.setState({login:this.state.name})
      this.abc = this.state.name;
    //    console.log(this.abc);
  };
  render() {
    alert('hi ren');
    return (
      <div>
        {/* <input
          type="text"
          onChange={this.hnadleChange}
        /> */}
        
        <button
          type="button"
          onClick={() => {
            this.handleOnclick();
          }}
        >
          button
        </button>
        {/* <Header1 header={this.state.login}/> */}
        {/* <Header1/> */}
        <Header1 header={this.abc} />
           {/* <Header1 header={this.state.name} /> */}
      </div>
    );
  }
}
