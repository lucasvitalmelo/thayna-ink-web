// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className='bg-blue-200 text-black dark:bg-gray-950 dark:text-gray-100 pt-5'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;