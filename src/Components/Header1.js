import React, { Component } from 'react'

export default class Header1 extends Component {
    constructor(props){
      //  alert('hi  c con');
        super(props);
        //console.log(props)
    }
    render() {
       // debugger;
     //  alert('hi c ren');
    // console.log(this.props.header)
       console.log(this.props.header +'   ' +'  c')
        return (
            <div style={{border:"1px solid black"}}>
            
               <h1>{this.props.header}</h1> 
               <h1>welcome</h1>
            </div>
        )
    }
}
