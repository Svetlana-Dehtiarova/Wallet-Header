import { LoginForm } from 'components/LoginForm/LoginForm';
import css from 'pages/Pages.module.css';

const Login = () => {
  return (
    <div className={css.loginPage}>
      <h1 className={css.titleLogin}>Login</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
