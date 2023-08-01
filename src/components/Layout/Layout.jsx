import Appbar from 'components/Appbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

export default function Layout() {
  return (
    <>
      <Appbar />
      <main>
        <Suspense fallback={<Loader open={true} />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
