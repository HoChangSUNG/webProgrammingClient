
const MovieCarouselDetail=(props)=> {
  return (
            <div className = "movie_carousel_item">
              <div className="movie_carousel_img_wrap" data-rank = {props.rank}>
                <img className="movie_carousel_img" src={props.posterDetail.imgSrc} ></img>
              </div>
              
              <div className="carousel_movie_name">{props.posterDetail.movieName}</div>
              <div>평점{'\u00A0'} {props.posterDetail.movieRating}% {'\u00A0'}| {'\u00A0'}예매율{'\u00A0'} {props.posterDetail.bookingRate}%</div>  
              {/* {'\u00A0'} -> 띄어쓰기 */}
            </div>
    );
}
export default MovieCarouselDetail;
