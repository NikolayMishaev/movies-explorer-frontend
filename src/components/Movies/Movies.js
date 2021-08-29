import React from "react";
import "./Movies.css";
// импорт компонентов
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchMessage from "../SearchMessage/SearchMessage";

export default function Movies({
  checkboxOn,
  handleMovieCheckbox,
  handleSearchValue,
  openPopupError,
  preloaderVisible,
  handleMoviesCards,
  moviesCards,
  searchMessage,
  onCardLike,
}) {
  return (
    <>
      <SearchForm
        handleMoviesCards={handleMoviesCards}
        checkboxOn={checkboxOn}
        handleMovieCheckbox={handleMovieCheckbox}
        handleSearchValue={handleSearchValue}
      />
      {preloaderVisible ? (
        <Preloader />
      ) : searchMessage ? (
        <SearchMessage searchMessage={searchMessage} />
      ) : (
        <MoviesCardList
          moviesCards={moviesCards}
          openPopupError={openPopupError}
          onCardLike={onCardLike}
        />
      )}
    </>
  );
}
