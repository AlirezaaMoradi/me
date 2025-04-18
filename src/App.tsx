import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

// Pages
import HomePage from './pages/Home';

// Routes
const routes = createHashRouter([
  {
    path: '/',
    element: <HomePage /> 
  }
]);

// App
const App = () => {
  return(<RouterProvider router={routes} />);
};

export default App;