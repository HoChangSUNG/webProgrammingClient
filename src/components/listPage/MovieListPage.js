import MovieListDetail from "./MovieListDetail";
const movieDetail = [
  { movieName: "범죄도시 2", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg", bookingRate: 47.5,director:"이상용",actor:"마동석, 손석구", genre:"범죄, 액션",contry:"한국",openDate:"2022.05.18",showTime:106,ageLimit:15,movieRating:99},
  {
    movieName: "쥬라기 월드-도미니언",
    imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg",
    bookingRate: 29.5,director:"콜린 트레보루오",actor:"배우", genre:"장르",contry:"미국",openDate:"2022.05.18",showTime:130,ageLimit:11,movieRating:97
  },
  {
    movieName: "닥터 스트레인지- 대혼돈의 멀티버스",
    imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85715/85715_320.jpg",
    bookingRate: 20.5,director:"감독",actor:"배우들", genre:"장르",contry:"나라",openDate:"2022.05.18",showTime:100,ageLimit:18,movieRating:90
  },
  {
    movieName: "극장판 포켓몬스터DP-기라티나와 하늘의 꽃다발 쉐이미",
    imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85715/85715_320.jpg",
    bookingRate: 15.5,director:"이상용",actor:"배우들", genre:"장르",contry:"나라",openDate:"2022.05.18",showTime:120,ageLimit:12,movieRating:80
  },
  { movieName: "브로커", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg", bookingRate: 10.5 ,director:"이상용",actor:"배우", genre:"장르",contry:"나라",openDate:"2022.05.18",showTime:120,ageLimit:12,movieRating:70},
  { movieName: "그대가 조국", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85886/85886_320.jpg", bookingRate: 3.5,director:"조국",actor:"배우", genre:"장르르",contry:"한국",openDate:"2022.02.18",showTime:120,ageLimit:12 ,movieRating:98},
  { movieName: "애프터 양", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85884/85884_320.jpg", bookingRate: 2.5,director:"양",actor:"배우", genre:"장르",contry:"나라",openDate:"2022.01.18",showTime:120,ageLimit:12 ,movieRating:79},
  { movieName: "피는 물보다 진하다", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85790/85790_320.jpg", bookingRate: 1.5,director:"감독",actor:"", genre:"장르다",contry:"국가다",openDate:"2022.12.18",showTime:120,ageLimit:12,movieRating:19 },
];

const MovieListPage = () => {
  return (
    <div className="movie_list_container">
      <div className="tit-movie-list-heading-wrap">
        <h3>무비차트</h3>
      </div>
      <div className="movielist-sect-sorting">
        <select className="movie-select-option" id="order_type" name="order-type">
          <option title="현재 선택됨" value="1">
            예매율순
          </option>
          <option value="2">평점순</option>
        </select>
        <button type="button" className="sorting-button">
          <span>GO</span>
        </button>
      </div>
      <div className="movie_list_contents">
        {movieDetail.map((movie, index) => (
          <MovieListDetail
            movieInfo={movie}
            key={index}
            rank={index + 1}
          ></MovieListDetail>
        ))}
      </div>
    </div>
  );
};
export default MovieListPage;
