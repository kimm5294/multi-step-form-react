import React, { Component } from 'react';

class SocialMedia extends Component {

  constructor(args) {
    super(args);
    this.state = {
    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Social Media Handles</h2>
        <form>
          <label>Facebook Link</label>
          <input type="text" ref="fb" defaultValue={this.props.values.fb}/>
          <br/>
          <label>Twitter Handle</label>
          <input type="text" ref="twitter" defaultValue={this.props.values.twitter}/>
          <br/>

          <label>Instagram</label>
          <input type="text" ref="instagram" defaultValue={this.props.values.instagram}/>
          <br/>

          <label>Youtube Link</label>
          <input type="text" ref="youtube" defaultValue={this.props.values.youtube}/>
          <br/>

          <label>Snapchat Name</label>
          <input type="text" ref="snapchat" defaultValue={this.props.values.snapchat}/>

        </form>
        <button onClick={this.props.previousStep}>Previous Page</button>
        <button onClick={this.nextStep.bind(this)}>Save and Continue</button>
      </div>
    )
  }

  nextStep(e) {
    e.preventDefault()
    var data = {
      fb: this.refs.fb.value,
      twitter: this.refs.twitter.value,
      instagram: this.refs.instagram.value,
      youtube: this.refs.youtube.value,
      snapchat: this.refs.snapchat.value,
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }
}

export default SocialMedia;