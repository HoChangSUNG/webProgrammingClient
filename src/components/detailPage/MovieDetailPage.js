import { AiOutlineLike } from "react-icons/ai";

const showCommentDiv = (e) =>{

}

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
              <a className="link-gradewrite" id="show-comment-div" onClick={showCommentDiv}>
                <span>평점작성</span>
              </a>
              <a className="link-reviewwrite">
                <span>내 평점</span>
              </a>
            </div>
          </div>

        {/* 댓글 등록 화면 */}
        <div classNames="create_comment_wrap">
        <select className="comment-rating-select-option" id="comment-rating" name="comment-rating-type">
          <option title="현재 선택됨" value="1">
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>

          <option value="4">4</option>
          <option value="5">5</option>

        </select>
        <input className="comment-input-box" type="text" name="comment"></input>
        <div className="comment-submit">등록</div>
        </div>

         {/*댓글*/}
          <ul id="movie_point_list_container" className="movie_persongrade"> 
             
            <li className="movie_point_list_item">
              <div>
                <div className="movie_point_comment_img"></div>
                <p className="movie_point_comment_name">이름</p>
                <p className="movie_point_comment_content">
                  sfdddddddddddddddddddddddddddddddddddddddddddddsfddddddddddddddddddddddddddddddddsdfffffffffffdsfddddddddddddddd
                </p>
              </div>
              <div className="movie_point_list_comment_sub">
                <div className="comment_createdDate">2022.06.02 | </div>
                <AiOutlineLike fontSize="22px" />
                <div className="comment_like_cnt">1</div>
                <div className="comment_update">수정하기</div>
              </div>
            </li>

            <li className="movie_point_list_item">
              <div>
                <div className="movie_point_comment_img"></div>
                <p className="movie_point_comment_name">이름</p>
                <p className="movie_point_comment_content">
                  sfdddddddddddddddddddddddddddddddddddddddddddddsfddddddddddddddddddddddddddddddddsdfffffffffffdsfddddddddddddddd
                </p>
              </div>
              <div className="movie_point_list_comment_sub">
                <div className="comment_createdDate">2022.06.02 | </div>
                <AiOutlineLike fontSize="22px" />
                <div className="comment_like_cnt">1</div>
                <div className="comment_update">수정하기</div>
              </div>
            </li>

            <li className="movie_point_list_item">
              <div>
                <div className="movie_point_comment_img"></div>
                <p className="movie_point_comment_name">이름</p>
                <p className="movie_point_comment_content">
                  sfdddddddddddddddddddddddddddddddddddddddddddddsfddddddddddddddddddddddddddddddddsdfffffffffffdsfddddddddddddddd
                </p>
              </div>
              <div className="movie_point_list_comment_sub">
                <div className="comment_createdDate">2022.06.02 | </div>
                <AiOutlineLike fontSize="22px" />
                <div className="comment_like_cnt">1</div>
                <div className="comment_update">수정하기</div>
              </div>
            </li>

            <li className="movie_point_list_item">
              <div>
                <div className="movie_point_comment_img"></div>
                <p className="movie_point_comment_name">이름</p>
                <p className="movie_point_comment_content">
                  sfdddddddddddddddddddddddddddddddddddddddddddddsfddddddddddddddddddddddddddddddddsdfffffffffffdsfddddddddddddddd
                </p>
              </div>
              <div className="movie_point_list_comment_sub">
                <div className="comment_createdDate">2022.06.02 | </div>
                <AiOutlineLike fontSize="22px" />
                <div className="comment_like_cnt">1</div>
                <div className="comment_update">수정하기</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailPage;

