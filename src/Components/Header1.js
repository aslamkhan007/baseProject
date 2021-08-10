import React, { Component } from "react";

export default class Header1 extends Component {
  constructor(props) {
    //  alert('hi  c con');
    super(props);

  
    //console.log(props)
  }


 
  render() {
    // debugger;
    //  alert('hi c ren');
    // console.log(this.props.header)
    console.log(this.props.array + "   " + "  c");
    return (
      <div style={{ border: "1px solid black" }}>
        <h1 style={{justifyContent: "center"}}>{`welcome to the ${this.props.header}`}</h1>
        {/* <h1>welcome</h1> */}
        <table>
          <thead>
            <tr>
            <th>EmployeeID</th>
            <th>EmployeeNAme</th>
            </tr>
          </thead>
          <tbody>
            {this.props.array.map((emp) => (
              <tr key={emp.EmployeeID}>
                <td>{emp.EmployeeID}</td>
                <td>{emp.EmployeeName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
