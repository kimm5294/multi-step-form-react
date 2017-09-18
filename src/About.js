import React, { Component } from 'react';

class About extends Component {

  render() {
    console.log(this.props.values)
    return (
      <div>
        <h2>About</h2>
        <form>
          <label>About</label>
          <textarea type="text" ref="about" defaultValue={this.props.values.about}/>
          <br/>
          <label>Location</label>
          <input type="text" ref="location" defaultValue={this.props.values.location}/>
          <br/>

          <label>Team</label>
          <input type="text" ref="team" defaultValue={this.props.values.team}/>
          <br/>

          <label>Association</label>
          <input type="text" ref="association" defaultValue={this.props.values.association}/>
          <br/>

          <label>Interests</label>
          <input type="text" ref="interests" defaultValue={this.props.values.interests}/>
          <br/>

          <label>Drinks Alcohol?</label>
          <input type="text" ref="alcohol" defaultValue={this.props.values.alcohol}/>
          <br/>

          <label>Married?</label>
          <input type="text" ref="married" defaultValue={this.props.values.married}/>
          <br/>

        </form>
        <div>
          <button onClick={this.props.previousStep}>Previous Page</button>
          <button onClick={this.nextStep.bind(this)}>Save and Continue</button>
        </div>
      </div>
    )
  }

  nextStep(e) {
    e.preventDefault()
    var data = {
      about: this.refs.about.value,
      location: this.refs.location.value,
      team: this.refs.team.value,
      association: this.refs.association.value,
      interests: this.refs.interests.value,
      alcohol: this.refs.alcohol.value,
      married: this.refs.married.value,
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }
}

export default About;