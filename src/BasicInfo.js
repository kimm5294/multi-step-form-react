import React, { Component } from 'react';

class BasicInfo extends Component {

  constructor(args) {
    super(args);
    this.state = {
    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Basic Information</h2>
        <form>
          <label>Name</label>
          <input type="text" ref="name" defaultValue={this.props.values.name}/>
          <br/>
          <label>Sport</label>
          <input type="text" ref="sport" defaultValue={this.props.values.sport}/>
          <br/>

          <label>Nationality</label>
          <input type="text" ref="nationality" defaultValue={this.props.values.nationality}/>
          <br/>

          <label>Gender</label>
          <input type="text" ref="gender" defaultValue={this.props.values.gender}/>
          <br/>

          <label>Date of Birth</label>
          <input type="text" ref="dob" defaultValue={this.props.values.dob}/>

        </form>
        <button onClick={this.nextStep.bind(this)}>Save and Continue</button>
      </div>
    )
  }

  nextStep(e) {
    e.preventDefault()
    var data = {
      name: this.refs.name.value,
      sport: this.refs.sport.value,
      nationality: this.refs.nationality.value,
      gender: this.refs.gender.value,
      dob: this.refs.dob.value,
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }
}

export default BasicInfo;