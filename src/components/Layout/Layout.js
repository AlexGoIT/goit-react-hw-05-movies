import Appbar from 'components/Appbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Appbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
