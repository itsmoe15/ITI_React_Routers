import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About    from './Components/Pages/About';
import Home     from './Components/Pages/Home';
import Shop     from './Components/Pages/Shop';
import Layout   from './Components/Layout';
import All      from './Components/Pages/Shop/All';
import Men      from './Components/Pages/Shop/Men';
import Women    from './Components/Pages/Shop/Women';
import NotFound from './Components/NotFound';

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'shop',
          element: <Shop />,
          children: [
            {
              index: true,
              element: <All />
            },
            {
              path: 'men',
              element: <Men />
            },
            {
              path: 'women',
              element: <Women />
            }
          ]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
