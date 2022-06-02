import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MovieMainPage from "./components/mainPage/MovieMainPage";
import react, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import MovieListPage from "./components/listPage/MovieListPage";
import LoginPage from "./components/LoginPage";
import MovieDetailPage from "./components/detailPage/MovieDetailPage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/" //메인 페이지(mainPage)
          element={<MovieMainPage></MovieMainPage>}
        ></Route>
        <Route
          path="/movies" //영화 리스트 페이지(listPage)
          element={<MovieListPage></MovieListPage>}
        ></Route>
        <Route path="/login" //로그인 페이지
        element={<LoginPage></LoginPage>}></Route>
        <Route path="/movies/id" // 영화 상세 정보 페이지(detailPage)
        element={<MovieDetailPage></MovieDetailPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
