import { Route, Routes } from 'react-router-dom';
import { LibraryView } from '@views/libraryView';
import { NotFound404 } from '@views/notFound404';
import { LibraryDetailView } from '@views/libraryDetailView';

export const AppRouter = () => {
  const routes = [
    {
      path: '/',
      element: <LibraryView />,
    },
    {
      path: '/library',
      element: <LibraryView />,
    },
    {
      path: 'library/:id',
      element: <LibraryDetailView />,
    },
    {
      path: '*',
      element: <NotFound404 />,
    },
  ];

  return (
    <div className='m-auto pl-10 pt-2 '>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
