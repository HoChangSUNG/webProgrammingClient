const MovieDetailPage = (props) => {
  return (
    <div>
      <div className="movie-detail-container">
        <div className="movie-detail-contents">
          <div className="movie-detail-poster-img">
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"></img>
          </div>
          <div className="movie-detail-info-wrap">
            <strong className="movie-dtail-info-title">
              쥬라기 월드-도미니언
            </strong>
            <div className="movie-dtail-info-booking-rank">
              예매율 29.5% | 평점 97%{" "}
            </div>
            <div className="movie-dtail-info-persons">
              감독 : 콜린 트레보루오 / 배우 : 크리스 프랫, 딜라이스, 에베베베
            </div>
            <div className="movie-dtail-info-otherInfo">
              장르 : 액션,어드벤처 / 기본 : 11세 이상,130분,미국
            </div>
            <div className="movie-dtail-info-openDate">개봉 : 2022.05.18</div>
          </div>
        </div>
        <div className="wrap-persongrade">
          <div className="real-rating">
            <p className="title">
              관람일 포함 7일 이내 관람평을 남기시면 <strong>CJ ONE 20P</strong>
              가 적립됩니다.{" "}
            </p>
            <p className="comment-title-desc">
              <span>
                <em>15</em> 명의 실관람객이 평가해주셨습니다.
              </span>
            </p>
            <div className="wrap_btn">
              <a className="link-gradewrite">
                <span>평점작성</span>
              </a>
              <a className="link-reviewwrite">
                <span>내 평점</span>
              </a>
            </div>
          </div>
          <ul id="movie_point_list_container" className="movie_persongrade">
            <li className="movie_point_list_item">
              <div>
                <div className="movie_point_comment_img"></div>
                <p className="movie_point_comment_name">이름</p>
                <p className="movie_point_comment_content">
                  sfdddddddddddddddddddddddddddddddddddddddddddddsfddddddddddddddddddddddddddddddddsdfffffffffffdsfddddddddddddddd
                </p>
              </div>
            </li>
            <li className="movie_point_list_item">sdfsdf</li>
            <li className="movie_point_list_item">test3</li>
            <li className="movie_point_list_item">test4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailPage;

// {
//   movieName: "쥬라기 월드-도미니언",
//   imgSrc: "쥬라기월드.jpg",
//   bookingRate: 29.5,director:"콜린 트레보루오",actor:"배우", genre:"장르",contry:"미국",openDate:"2022.05.18",showTime:130,ageLimit:11,movieRating:97
// }
