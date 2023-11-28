import { useState } from 'react'
import Sidebar from './components/sidebar'
import Layout from './components/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PatientsStatistics from './pages/PatientsStatistics';


function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/patient",
          element:<PatientsStatistics />
        }

      ]
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App
