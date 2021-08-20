import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navigation({ place }) {
  return (
    <>
      {place === "header" && (
        <nav className="navigation">
          <ul className="navigation__links">
            <li className="navigation__list navigation__list_type_main">
              <Link
                className="navigation__link navigation__link_type_main"
                to="#"
              ></Link>
            </li>
            <li className="navigation__list">
              <Link
                className="navigation__link navigation__link_type_signup"
                to="#"
              >
                Регистрация
              </Link>
            </li>
            <li className="navigation__list navigation__list_type_signin">
              <Link
                className="navigation__link navigation__link_type_signin"
                to="#"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {place === "menu" && (
        <nav className="navigation navigation_place_menu">
          <ul className="navigation__links">
            <li className="navigation__list navigation__list_type_menu">
              <HashLink
                className="navigation__link navigation__link_type_menu"
                smooth to="#about-project"
              >
                О проекте
              </HashLink>
            </li>
            <li className="navigation__list navigation__list_type_menu">
              <HashLink
                className="navigation__link navigation__link_type_menu"
                smooth to="#technology"
              >
                Технологии
              </HashLink>
            </li>
            <li className="navigation__list navigation__list_type_menu">
              <HashLink
                className="navigation__link navigation__link_type_menu"
                smooth to="#about-me"
              >
                Студент
              </HashLink>
            </li>
          </ul>
        </nav>
      )}
      {place === "about-me" && (
        <nav className="navigation">
          <ul className="navigation__links">
            <li className="navigation__list navigation__list_type_about-me">
              <Link
                className="navigation__link navigation__link_type_about-me"
                to="https://t.me/nikolaymishaev"
                target="_blank"
              >
                Telegram
              </Link>
            </li>
            <li className="navigation__list navigation__list_type_about-me">
              <Link
                className="navigation__link navigation__link_type_about-me"
                to="https://github.com/NikolayMishaev"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li className="navigation__list navigation__list_type_about-me">
              <Link
                className="navigation__link navigation__link_type_about-me"
                to="https://www.codewars.com/users/NikolayMishaev"
                target="_blank"
              >
                Codewars
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {place === "footer" && (
        <nav className="navigation">
          <ul className="navigation__links">
            <p className="navigation__text">&copy;2021</p>
            <li className="navigation__list navigation__list_type_footer">
              <Link
                className="navigation__link navigation__link_type_footer"
                to="https://practicum.yandex.ru"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className="navigation__list navigation__list_type_footer">
              <Link
                className="navigation__link navigation__link_type_footer"
                to="https://github.com/NikolayMishaev"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li className="navigation__list navigation__list_type_footer">
              <Link
                className="navigation__link navigation__link_type_footer"
                to="https://t.me/nikolaymishaev"
                target="_blank"
              >
                Telegram
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
