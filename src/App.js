// import logo from './logo.svg';
import "./App.css";
import MovieSection from "./components/MovieSection";
function App() {
  const movieData = [
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "https://i.pinimg.com/564x/2e/28/44/2e284493980bf460e0ca9aae02201e50.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      Title: "I Am Legend",
      Year: "2007",
      Rated: "PG-13",
      Released: "14 Dec 2007",
      Runtime: "101 min",
      Genre: "Drama, Horror, Sci-Fi",
      Director: "Francis Lawrence",
      Writer:
        "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      Actors:
        "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      Language: "English",
      Country: "USA",
      Awards: "9 wins & 21 nominations.",
      Poster:
        "https://i.pinimg.com/564x/f0/a2/2f/f0a22f3feba093a083001692dd2088bc.jpg",
      Metascore: "65",
      imdbRating: "7.2",
      imdbVotes: "533,874",
      imdbID: "tt0480249",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg",
      ],
    },
    {
      Title: "300",
      Year: "2006",
      Rated: "R",
      Released: "09 Mar 2007",
      Runtime: "117 min",
      Genre: "Action, Drama, Fantasy",
      Director: "Zack Snyder",
      Writer:
        "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      Language: "English",
      Country: "USA",
      Awards: "16 wins & 42 nominations.",
      Poster:
        "https://i.pinimg.com/564x/10/19/61/10196194e10c1b0ad4b9b7392c0ed9da.jpg",
      Metascore: "52",
      imdbRating: "7.7",
      imdbVotes: "611,046",
      imdbID: "tt0416449",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
      ],
    },
    {
      Title: "The Avengers",
      Year: "2012",
      Rated: "PG-13",
      Released: "04 May 2012",
      Runtime: "143 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Joss Whedon",
      Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      Language: "English, Russian",
      Country: "USA",
      Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      Poster:
        "https://i.pinimg.com/564x/34/dc/fa/34dcfa6553dae30f9bc614ac1c2b6175.jpg",
      Metascore: "69",
      imdbRating: "8.1",
      imdbVotes: "1,003,301",
      imdbID: "tt0848228",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      ],
    },
    {
      Title: "The Wolf of Wall Street",
      Year: "2013",
      Rated: "R",
      Released: "25 Dec 2013",
      Runtime: "180 min",
      Genre: "Biography, Comedy, Crime",
      Director: "Martin Scorsese",
      Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
      Actors:
        "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      Language: "English, French",
      Country: "USA",
      Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      Poster:
        "https://i.pinimg.com/564x/e8/eb/0d/e8eb0d27d7dc341eaf6a566238ae17c5.jpg",
      Metascore: "75",
      imdbRating: "8.2",
      imdbVotes: "786,985",
      imdbID: "tt0993846",
      Type: "movie",
      Response: "True",
      Images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
      ],
    },
  ];

  return (
    <>
      <h1>Movies Masala</h1>
      <div id="mainContainer">
        {movieData.map((ele, ind) => {
          return (
            <MovieSection
              key={ind}
              genre={ele.Genre}
              time={ele.Runtime}
              director={ele.Director}
              year={ele.Year}
              title={ele.Title}
              plot={ele.Plot}
              poster={ele.Poster}
              image={ele.Images[2]}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;