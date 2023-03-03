import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from 'pages/Pages.module.css';

const Register = () => {
  return (
    <div className={css.loginPage}>
      <h1 className={css.titleLogin}>Registration</h1>
      <RegisterForm />
    </div>
  );
};
export default Register;
