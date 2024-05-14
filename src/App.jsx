
import React, { Component } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

class PhotoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPhoto: false,
      displayName: false, // Adding state for displaying name
      timeSinceMount: 0 // Adding state for displaying time since mount
    };
    this.togglePhoto = this.togglePhoto.bind(this);
    this.toggleName = this.toggleName.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  togglePhoto() {
    this.setState(prevState => ({
      displayPhoto: !prevState.displayPhoto
    }));
  }

  toggleName() {
    this.setState(prevState => ({
      displayName: !prevState.displayName
    }));
  }
  componentDidMount() {
    setInterval(() => {
       this.setState({timeSinceMount :this.state.timeSinceMount+1});
     }, 1000);
   }
 



  toggle(){
    this.toggleName()
    this.togglePhoto()
    
  }
  

  render() {
    return (
      <div className="photo-display">
        <button className="display-button" onClick={this.toggle}>
          {this.state.displayPhoto ? "good bye " : "welcome"}
          {this.state.displayName ? "" : ""}

        </button>
        {this.state.displayPhoto && (
          <img src="/fu.avif" className="displayed-photo" alt="Displayed Photo" />
        )}
        {this.state.displayName && (
          <div>
          <p className="displayed-name">{this.state.timeSinceMount} </p>
          <p    className='displayed-name'> reami hammami  </p>
          </div>
        )}
      </div>
    );
  }
};

export default PhotoDisplay;
