import { NavLink } from 'react-router-dom';
import css from 'pages/Pages.module.css';

const NotFound = () => {
  return (
    <>
      <h3 className={css.subtitle}>Error 404</h3>
      <p className={css.subtitle}>
        Woops... Looks like this page doesn't exist!
      </p>
      <button className={css.button} type="submit">
        <NavLink to="/">Go Back</NavLink>{' '}
      </button>
    </>
  );
};
export default NotFound;
