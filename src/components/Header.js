import { useRef, useState, useEffect } from "react";

const showMemberInfo = (e)=>{
  e.stopPropagation();
  document.querySelector("#memberInfo_wrap").classList.toggle("onActive");
  document.querySelector("#hamburger").classList.toggle("offActive");
  document.querySelector("#hamburgerDisapperBtnDiv").classList.toggle("onActiveBlock");

}

const disappearMemberInfo = (e)=>{
  document.querySelector("#memberInfo_wrap").classList.toggle("onActive");
  document.querySelector("#hamburger").classList.toggle("offActive");
  document.querySelector("#hamburgerDisapperBtnDiv").classList.toggle("onActiveBlock");

  e.stopPropagation();
  console.log("시발진짜")
}


const Header=()=> {

    return (
      <div className="header">
        <div className="header_content">
          <div className="contents">
            <div className="hamburger" id="hamburger" onClick={showMemberInfo}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <h1>
              <a href="/">
                <img src="/img/logo/cgvLogo.png"></img>
              </a>
              <span>CULTUREPLEX</span>
            </h1>
            <ul className="memberInfo_wrap"id="memberInfo_wrap">
              <li><a href="/login"><img src="/img/logo/loginLogo.png"></img><span>로그인</span></a></li>
              <li><a href="#"><img src="/img/logo/signUpLogo.png"></img><span>회원가입</span></a></li>
              <li><a href="#"><img src="/img/logo/myCgvLogo.png"></img><span>MY CGV</span></a></li>
              <li><a href="#"><img src="/img/logo/serviceCenterLogo.png"></img><span>고객센터</span></a></li>
            </ul>
            <div className="hamburgerDisapperBtnDiv" id = "hamburgerDisapperBtnDiv"><p id = "menuDisappearBtn" className="hamburgerDisapperBtn"onClick={disappearMemberInfo}>x</p></div>
          </div>
          
        </div>
        <ul className="menu">
          <li><h2><a href="/movies">영화</a></h2></li>
          <li><h2><a href="#">극장</a></h2></li>
        </ul>
      </div>
    );
}

export default Header;
