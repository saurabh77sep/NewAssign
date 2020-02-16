import React, {Component} from "react";


class Student extends Component{
constructor(props){
    super(props);
    this.state ={
        name : "saurabh",
        lastname: this.props.lastname
    };


}


render(){

return  <h1>Hello My first name is, {this.state.name} and last name is {this.state.lastname}</h1>;


}

}
export default Student;