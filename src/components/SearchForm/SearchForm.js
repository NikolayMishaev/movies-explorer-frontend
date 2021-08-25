import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({
  checkboxOn,
  handleMovieCheckbox,
  handlePreloader,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    handlePreloader();
  }
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__search">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            minLength="1"
            required
          ></input>
          <button className="search-form__button-submit" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox
          checkboxOn={checkboxOn}
          handleMovieCheckbox={handleMovieCheckbox}
        />
      </form>
    </section>
  );
}
