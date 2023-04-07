import React, { Component } from 'react'

export class Style extends Component {
    constructor(props){
        super(props)
        {
            this.state = {
                sty : false
            }
        }
    }
    changeColor = () => {
        this.setState ({sty:true})
    }
  render() {
    let colorObj = {
        color : 'brown',
        backgroundColor : 'lightpink',
        fontSize : '40px'
    }
    if(this.state.sty)
    {
        // colorObj = {
        //     color : 'white',
        //     backgroundColor : 'black',
        //     fontSize : '40px'
        // }
        // colorObj.backgroundColor = 'green'
        colorObj.backgroundColor = this.props.backgroundColor
    }
    return (
      <div>
        <h1 style={colorObj}>Style Component</h1>
        <button style={colorObj} onClick={this.changeColor}>Click Here</button>
      </div>
    )
  }
}

export default Style
