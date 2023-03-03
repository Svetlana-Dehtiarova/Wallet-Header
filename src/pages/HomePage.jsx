import { NavLink } from 'react-router-dom';
import css from 'pages/Pages.module.css';

const Home = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>
        Welcome, this is your personal phonebook app{' '}
        <NavLink className={css.linkHome} to="/register">
          ☎️
        </NavLink>
      </h1>
    </div>
  );
};
export default Home;
