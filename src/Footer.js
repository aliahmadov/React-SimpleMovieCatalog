import React, { Component } from 'react'
import Feedback from './Feedback'

let contents={
    content1:"This is the best movie",
    content2:"I liked this website a lot"
};

export default class Footer extends Component {
  render() {
    return (
      <div style={{display:"flex",backgroundColor:"black",flexDirection:"column",padding:10}}>
        <p style={{color:"white",fontSize:40}}>Feedback Section</p>
        <Feedback content={contents.content1}></Feedback>
        <Feedback content={contents.content2}></Feedback>
      </div>
    )
  }
}
