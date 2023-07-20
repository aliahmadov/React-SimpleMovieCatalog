import React, { Component } from 'react'
import "./Feedback.css"
export default class Feedback extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex",padding:30}}>
            <img src='/assets/unknown.jpg' className='profile' alt='profile'></img>
            <p style={{color:"white"}}>{this.props.content}</p>
        </div>
      </div>
    )
  }
}
