import React, { Component } from 'react'
import Movie from "./Movie.js"
import "./MovieList.css"

export default class MovieList extends Component {
  render() {
    return (
      <div className='movieList' >
        <Movie movie={this.props.movieList.movie1}></Movie>
        <Movie movie={this.props.movieList.movie2}></Movie>
        <Movie movie={this.props.movieList.movie3}></Movie>
      </div>
    )
  }
}
