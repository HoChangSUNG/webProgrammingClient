import { useRef, useState, useEffect } from "react";
import MovieCarouselDetail from "./MovieCarouselDetail";
import MovieEventDetail from "./MovieEventDetail";

//movieRating :평점
//bookingRate : 예매율
//showTime : 상영 시간
//openDate : 개봉 날짜
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
    imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85833/85833_320.jpg",
    bookingRate: 15.5,director:"이상용",actor:"배우들", genre:"장르",contry:"나라",openDate:"2022.05.18",showTime:120,ageLimit:12,movieRating:80
  },
  { movieName: "브로커", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg", bookingRate: 10.5 ,director:"이상용",actor:"배우", genre:"장르",contry:"나라",openDate:"2022.05.18",showTime:120,ageLimit:12,movieRating:70},
  { movieName: "그대가 조국", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85886/85886_320.jpg", bookingRate: 3.5,director:"조국",actor:"배우", genre:"장르르",contry:"한국",openDate:"2022.02.18",showTime:120,ageLimit:12 ,movieRating:98},
  { movieName: "애프터 양", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85884/85884_320.jpg", bookingRate: 2.5,director:"양",actor:"배우", genre:"장르",contry:"나라",openDate:"2022.01.18",showTime:120,ageLimit:12 ,movieRating:79},
  { movieName: "피는 물보다 진하다", imgSrc: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85790/85790_320.jpg", bookingRate: 1.5,director:"감독",actor:"", genre:"장르다",contry:"국가다",openDate:"2022.12.18",showTime:120,ageLimit:12,movieRating:19 },
];
const movieEvent = [
  {
    eventTitle: "[CGV NFT 플레이 포스터] No.2 범죄도시2",
    imgSrc: "https://img.cgv.co.kr/WebApp/contents/eventV4/34501/16521431715560.jpg",
    eventDuring: "2022.05.10~2022.06.12",
  },
  {
    eventTitle: "[쥬라기 월드: 도미니언]CGV 필름마크",
    imgSrc: "https://img.cgv.co.kr/WebApp/contents/eventV4/34608/16534549224840.jpg",
    eventDuring: "2022.05.25~2022.06.19",
  },
  {
    eventTitle: "[범죄도시2] 포토플레이 시크릿 컷",
    imgSrc: "https://img.cgv.co.kr/WebApp/contents/eventV4/34521/16521429577520.jpg",
    eventDuring: "2022.05.10~2022.06.05",
  },
  {
    eventTitle: "[범죄도시2]CGV 필름마크",
    imgSrc: "https://img.cgv.co.kr/WebApp/contents/eventV4/34541/16522354176350.jpg",
    eventDuring: "2022.05.11~2022.06.05",
  },
];

const MovieMainPage = () => {
  // movie-detail-carousel
  const movieCnt = 4;
  const [curMovies, setCurMovies] = useState(movieDetail.slice(0, movieCnt));
  const curIndex = useRef(0);

  //movie-event-carousel
  const [curEventIndex, setCurEventIndex] = useState(0);
  const secondMovieEvent = movieEvent
    .slice(2, 4)
    .concat(...movieEvent.slice(0, 2));
  const curMovieEventList = [[...movieEvent], [...secondMovieEvent]];
  
  
  // movie-detail-carousel
  const moveSlide = (e) => {
    if (e.target.className === "swiper-button-prev") {
      curIndex.current = curIndex.current === 0 ? 1 : 0;
    } else if (e.target.className === "swiper-button-next") {
      curIndex.current = curIndex.current === 1 ? 0 : 1;
    }

    const start = curIndex.current * movieCnt;
    const end = curIndex.current * movieCnt + movieCnt;

    setCurMovies(movieDetail.slice(start, end));
  };

  //movie-event-carousel ->Timer 무한 반복
  useEffect(() => {
    const timer = setInterval(
      () => setCurEventIndex((curEventIndex + 1) % 2),
      3000
    );
    return () => clearInterval(timer);
  }, [curEventIndex]);

  return (
    <div>
      {/* 영화 랭킹 */}
      <div className="movie_carousel_container">
        <div className="movie_carousel_name_wrap">무비 차트</div>
        <div className="movie_carousel_wrapper">
          <div className="movie_carousel_button_wrapper">
            <img className="swiper-button-prev" onClick={moveSlide}></img>

            <div className="movie_carousel_contents">
              {curMovies.map((movie, index) => (
                <MovieCarouselDetail
                  posterDetail={movie}
                  key={index}
                  rank={curIndex.current * movieCnt + index + 1}
                ></MovieCarouselDetail>
              ))}
            </div>

            <img className="swiper-button-next" onClick={moveSlide}></img>
          </div>
        </div>
      </div>

      {/* 이벤트 목록 */}
      <div className="movie_event_container">
        <div className="movie_event_name_wrap">EVENT</div>
        <div className="movie_event_contents">
          {curMovieEventList[curEventIndex].map((movieEvent, index) => (
            <MovieEventDetail
              eventDetail={movieEvent}
              key={index}
            ></MovieEventDetail>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default MovieMainPage;
