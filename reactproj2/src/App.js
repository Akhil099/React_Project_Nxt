import logo from './logo.svg';
import './App.css';
import Nb1 from './components/Nb1';
import AdOne from './components/AdOne';
import './components/Nb1.css';
import MainBd from './components/MainBd';
import MainBd2 from './components/MainBd2';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Country from './components/Country';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
      path:"/country/:countryName",
      element: <Country/>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
