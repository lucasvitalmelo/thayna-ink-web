// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className='bg-blue-200 text-black dark:bg-gray-950 dark:text-gray-100'>
        <section className="flex w-full items-center justify-center overflow-auto">
          <div className="flex flex-col max-w-7xl w-full mx-5 pt-4 h-[calc(100vh-60px)]">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;