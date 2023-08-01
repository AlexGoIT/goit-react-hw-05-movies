import Appbar from 'components/Appbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Appbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
