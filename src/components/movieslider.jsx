import "../styles/movieSlider.css";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import Dots from 'react-carousel-dots';
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom";
const movieSlider = () => {

  const slides = [
    {
      image: 'https://picsum.photos/200/300',
      title: "Här har vi den allra första bilden", 
      rating:5,       
  },
  {
      image:'https://picsum.photos/100/300',
      title: "Här har vi den andra bilden", 
      rating: 7,
  },
  {
      image:'https://picsum.photos/200/400',
      title: "Här har vi den tredje bilden",
      rating: 3,
  },
  {
    image: 'https://picsum.photos/100/400',
    title: "Här har vi den fjärde bilden", 
    rating:5,       
},
{
  image: 'https://picsum.photos/500/300',
  title: "Här har vi den femte bilden", 
  rating:6,       
},
{
  image: 'https://picsum.photos/600/500',
  title: "Här har vi den sjätte bilden", 
  rating:5,       
},
{
  image: 'https://picsum.photos/100/400',
  title: "Här har vi den sjunde bilden", 
  rating:5,       
},
  ];

  const slideLeft = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  // const cardClicked = () => {
  //   alert("You clicked the card");
  // }

  const cardClicked = () => {
    <Link></Link> ;
  }

  return (
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>   
      
      <div id="slider">
      
  
       { slides.map((slide,index) => {
          return (
            <Link to="/SelectedMovie">          
            <div className="slider-card" key={index}>            

            <MovieCard img={require("../assets/batman.png")} title="The Batman"/>

            </div>
            </Link> 
          )
        })}
          
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
  );
}

export default movieSlider


