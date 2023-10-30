import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className='flex justify-between px-5 bg-slate-500'>
        <h1>Dear Diary</h1>
        <Link to='/logout'>Logout</Link>
      </nav>
      <main className='p-7'>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
