import React, { Component } from "react";
import "./Movie.css";
export default class Movie extends Component {
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="rating">{this.props.movie.ratingIMDB}</p>
        <div className="movieBox">
          <img
            className="poster"
            src={this.props.movie.posterUrl}
            alt="poster"
          ></img>

          <div style={{ zIndex: 1, color: "white" }} className="movie-details">
            <p >Budget: {this.props.movie.finance}</p>
            <p >Genre: {this.props.movie.genre}</p>
            <p >Director: {this.props.movie.director}</p>
          </div>
        </div>

        <div style={{ padding: 5 }}>
          <p className="name">{this.props.movie.name}</p>
        </div>
      </div>
    );
  }
}
