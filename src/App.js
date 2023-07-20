import "./App.css";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import Footer from "./Footer"

let movies={
  movie1:{
    name:"Oppenheimer",
    genre:"Biograhical",
    director:"Cristopher Nolan",
    finance:"50M",
    ratingIMDB:"9",
    posterUrl:"/assets/poster1.webp"
  },
  movie2:{
    name:"Sully",
    genre:"Biograhical drama",
    director:"Clint EastWood",
    finance:"60M",
    ratingIMDB:"7.5",
    posterUrl:"/assets/poster2.avif"
  },
  movie3:{
    name:"Forrest Gump",
    genre:"Drama",
    director:"Cristopher Nolan",
    finance:"90M",
    ratingIMDB:"9.5",
    posterUrl:"/assets/poster3.jpg"
  }
}

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <MovieList movieList={movies}></MovieList>
      <Footer></Footer>
    </div>

  );
}

export default App;