import React, { Component } from "react";
import Header1 from "./Header1";
import ReactDom from "react-dom";

export default class Login extends Component {
  //abc = "hgh";
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password:"",
      login: "",
      arr: [],
      data: "",
    };
  }

 //note: async arrow function , normal function async, normal function bnaye hain
  //normal function k ander jo ki handle click h usme await kr k async bnaye.
  //componentwill unmount async wali error ko resolve krna hai.login_2.js me


//  async componentDidMount() {
//   await  fetch("http://13.233.21.154/reactcrudapi/api/Employee")
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         this.setState({ arr: result });
//       });
//   }



// async function 
// data = async() => {
//   await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result);
//       this.setState({ arr: result });
//     })
//   }



//normal async fnction 
 async data () {
  await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      this.setState({ arr: result });
    })
  }


//normal sync fnction 
//  data () {
//    fetch("http://13.233.21.154/reactcrudapi/api/Employee")
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result);
//       this.setState({ arr: result });
//     })
//   }


 componentDidMount() {
   //this.data();
  }

   

  hnadleChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    // this.setState({ password: e.target.value });
   // this.setState({ data: this.state.arr });

    //console.log(e.target.value)
  };

   handleOnclick = async () => {
    // this.setState({ name: "ss" });
    // this.setState({ login: this.state.name });
    //  this.abc = this.state.name;
    await  this.setState({ login: this.state.name });
    //await this.setState({arr:result})
    //this.data();
    
    

    await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      this.setState({ arr: result });
    })

    await this.setState({ data: this.state.arr });

    // this.abc = "jkhkjs";
    // console.log(`${this.abc} onclick pe set  `);

    // console.log(`${this.state.name} onclick pe set  `);
    // ReactDom.render(<Header1 header={this.state.name}/>,document.getElementById("root"));

    console.log(`${this.state.login} onclick pe set  `);
    ReactDom.render(
      <Header1 header={this.state.login} array={this.state.data}  />,
      document.getElementById("root")
    );

  

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
        <label>UserName:</label>
        <input
          type="text"
          onChange={this.hnadleChange}
          value={this.state.name}
        />
        <br/>
        <label>Password:</label>
         <input
          type="password"
          onChange={this.hnadleChange}
          //  value={this.state.password}
        />

 <br/>
 <br/>
        <button
          type="button"
          onClick={() => {
            this.handleOnclick();
          }}
        >
          button
        </button>
        {/* <Header1 header={this.state.login} array={this.state.data} /> */}
        <div id="root2"></div>

        {/* <Header1/> */}
        {/* <Header1 header={this.abc} /> */}
        {/* <Header1 header={this.state.name} /> */}
        {/* 
        <Header1 header={this.abc} />   */}
      </div>
    );
  }
}
