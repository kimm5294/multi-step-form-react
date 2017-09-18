import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import About from './About';
import SocialMedia from './SocialMedia';
import Summary from './Summary';
import List from './List';
import './App.css';
// import axios from 'axios';

class App extends Component {

  constructor(args){
    super(args);
    this.state = {
      values: {
        name: null,
        dob: null,
        nationality: null,
        location: null,
        association: null,
        team: null,
        gender: null,
        sport: null,
        about: null,
        interests: null,
        fb: null,
        twitter: null,
        instagram: null,
        youtube: null,
        snapchat: null,
        alcohol: null,
        married: null
      },
      step: 1
    }
  }

  saveValues(values) {
    this.setState({
      values: Object.assign({}, this.state.values, values)
    })
  }

  nextStep() {
    this.setState({
      step: this.state.step +1
    })
  }

  previousStep() {
    this.setState({
      step: this.state.step -1
    })
  }

  submitForm(data){
    // axios.post('localhost:8080/profiles', data)
    // .then((res)=>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  }

  stepDisplay() {
    switch (this.state.step) {
      case 1:
        return  <BasicInfo values={this.state.values}
                            nextStep={this.nextStep.bind(this)}
                            saveValues={this.saveValues.bind(this)} />
      case 2:
        return  <About values={this.state.values}
                            nextStep={this.nextStep.bind(this)}
                            previousStep={this.previousStep.bind(this)}
                            saveValues={this.saveValues.bind(this)} />
      case 3:
        return  <SocialMedia values={this.state.values}
                            nextStep={this.nextStep.bind(this)}
                            previousStep={this.previousStep.bind(this)}
                            saveValues={this.saveValues.bind(this)} />
      case 4:
        return  <Summary values={this.state.values}
                            previousStep={this.previousStep.bind(this)}
                            submitForm={this.submitForm.bind(this)} />
      case 5:
        return  <List />
    }
  }

  render() {
    return (
      <div>
        <span>Step {this.state.step}</span>
        {this.stepDisplay()}
      </div>
    );
  }
}

export default App;
