import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <AppBar />
      <Outlet />
    </div>
  );
};
