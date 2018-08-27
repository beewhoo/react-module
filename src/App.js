// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {

  //constructor

  constructor (props){
    super()

    this.state = {
      moodPoints: 1
    }
  }

  //method to increase moood

  increaseMood(e){

    if (this.state.moodPoints === 10){
      this.setState({
        moodPoints: 1
      })
    } else {

    this.setState({
      moodPoints: this.state.moodPoints + 1
    });
  }
}

  // what should the component render?
  render () {
    // make sure to return some UI
    return (


      <div>
      <h1>Hello {this.props.name}!</h1>
      <p> You are {this.props.age} old! </p>
      <p> You favs are {this.props.favs}! </p>
      <p>You are this happy: {this.state.moodPoints}</p>
      <button onClick={(e) => this.increaseMood(e)}> Cheer up! </button>
      </div>



    )
  }
}

export default Hello
