import { Carousel } from "react-carousel-minimal";

const movieSlider = () => {
    const data = [
        {
            image: require("../assets/img1.jpg"),
            caption: "Här har vi den allra första bilden", 
            rating:5,       
        },
        {
            image: require("../assets/img2.jpg"),
            caption: "Här har vi den andra bilden", 
            rating: 7,
        },
        {
            image: require("../assets/img3.jpg"),
            caption: "Här har vi den tredje bilden",
            rating: 3,
        }
    ];

    const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="movieslider">
             <Carousel
            data={data}
            time={2000}
            width="850px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "300px",
              margin: "10px auto",
            }}
             />
             </div>
    );
}

export default movieSlider

