import React, { Component } from 'react';

class Summary extends Component {

  render() {
    return (
      <div>
        <h2>Summary</h2>
        <ul>
          <h3>Basic Info</h3>
          <div>
            <li>
              Name: {this.props.values.name}
            </li>
            <li>
              DOB: {this.props.values.dob}
            </li>
            <li>
              Nationality: {this.props.values.nationality}
            </li>
            <li>
              Gender: {this.props.values.gender}
            </li>
            <li>
              Sport: {this.props.values.sport}
            </li>
          </div>

          <h3>About</h3>
          <div>
            <li>
              About: {this.props.values.about}
            </li>
            <li>
              Location: {this.props.values.location}
            </li>
            <li>
              Team: {this.props.values.team}
            </li>
            <li>
              Association: {this.props.values.association}
            </li>
            <li>
              Interests: {this.props.values.interests}
            </li>
            <li>
              Drinks Alcohol?: {this.props.values.alcohol}
            </li>
            <li>
              Married?: {this.props.values.married}
            </li>
          </div>

          <h3>Social Media</h3>
          <div>
            <li>
              Facebook: {this.props.values.fb}
            </li>
            <li>
              Twitter: {this.props.values.twitter}
            </li>
            <li>
              Instagram: {this.props.values.instagram}
            </li>
            <li>
              Youtube: {this.props.values.youtube}
            </li>
            <li>
              Snapchat: {this.props.values.snapchat}
            </li>
          </div>
        </ul>
        <div>
          <button onClick={this.props.previousStep}>Previous Page</button>
          <button onClick={this.props.submitForm}>Submit</button>
        </div>
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

export default Summary;