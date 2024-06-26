// import { NavLink } from "react-router-dom";
// import clsx from "clsx";import css from "./Navigation.module.css";

// const getLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// Navigation.jsx
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkClass = ({ isActive }) => {
    return clsx({
        [css.active]: isActive,
        [css.link]: !isActive,
    });
};


export default function Navigation() {
    return (
      <div className={css.div}>
        <nav>
          <ul className={css.container}>
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={getLinkClass}>
                Movies Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}