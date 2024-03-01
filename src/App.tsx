import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Landing';
import Root from './pages/Root';
import Menu from './pages/Menu';
import About from './pages/About';
import Profile from './pages/Profile';
import Status from './pages/Status';
import './app.scss';

interface RouteInterface {
  element: JSX.Element;
  path: string;
}

const ApplicationRoutes: Array<RouteInterface> = [
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/status',
    element: <Status />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route element={<Root />}>
        {ApplicationRoutes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
