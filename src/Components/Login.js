import React, { Component } from "react";
import Header1 from "./Header1";
import ReactDom from "react-dom";

export default class Login extends Component {
  //abc = "hgh";
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      login: ""
    };
  }

  hnadleChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });

    //console.log(e.target.value)
  };


    handleOnclick = async () => {
    // this.setState({ name: "ss" });
    // this.setState({ login: this.state.name });
    //  this.abc = this.state.name;
   await this.setState({ login: this.state.name });

    // this.abc = "jkhkjs";
    // console.log(`${this.abc} onclick pe set  `);

    // console.log(`${this.state.name} onclick pe set  `);
    // ReactDom.render(<Header1 header={this.state.name}/>,document.getElementById("root"));

    console.log(`${this.state.login} onclick pe set  `);
    ReactDom.render(<Header1 header={this.state.login}/>,document.getElementById("root"));


  //ReactDom.render(<Header1 header= "aa"/>,document.getElementById("root"));
  };

  // handleOnclick = () => {
  //   // this.setState({ name: "ss" });
  //   // this.setState({ login: this.state.name });
  //   //  this.abc = this.state.name;
  //   this.setState({ login: "hjhj" });

  //   // this.abc = "jkhkjs";
  //   // console.log(`${this.abc} onclick pe set  `);

  //   // console.log(`${this.state.name} onclick pe set  `);
  //   // ReactDom.render(<Header1 header={this.state.name}/>,document.getElementById("root"));

  //   console.log(`${this.state.login} onclick pe set  `);
  //   ReactDom.render(<Header1 header={this.state.login}/>,document.getElementById("root"));


  // //ReactDom.render(<Header1 header= "aa"/>,document.getElementById("root"));
  // };



  render() {
    // alert('hi ren');
    console.log(`${this.abc} parent `);
    return (
      <div>
        <input
          type="text"
          onChange={this.hnadleChange}
          value={this.state.name}
        />

        <button
          type="button"
          onClick={() => {
            this.handleOnclick();
          }}
        >
          button
        </button>
        <Header1 header={this.state.login} />
        {/* <Header1/> */}
        {/* <Header1 header={this.abc} /> */}
        {/* <Header1 header={this.state.name} /> */}
        {/* 
        <Header1 header={this.abc} />   */}
      </div>
    );
  }
}
