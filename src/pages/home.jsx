import Movies from "./movies";
import "../styles/Home.css"
import MovieSlider from "../components/movieslider";

const Home = (props) => {

  return (
    <div className="homeBaseContainer">
        <MovieSlider />
        <Movies />
    </div>
  );
};



export default Home;
