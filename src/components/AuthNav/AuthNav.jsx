import { NavLink } from 'react-router-dom';
import css from './AutNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="register">
        Sig up
      </NavLink>
      <NavLink className={css.link} to="login">
        Log In
      </NavLink>
    </div>
  );
};
