import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state={
            brand : "현대",
            model : "소나타",
            color : "red",
            year : 2020
        }
    }
    changeColor = ()=>{
        this.setState({color:"blue"})
    }
    render() {
      return (
          <div>
              <h2>I am a {this.props.brand.name}! </h2>
              <p>모델명 : {this.props.brand.model} </p>
              <p>색상 : {this.state.color} </p>
              <button type="button" onClick={this.changeColor}>색상변경</button>
          </div>
      )
    }
  }

  export default Car;