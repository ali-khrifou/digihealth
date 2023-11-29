import { useState } from 'react'
import Sidebar from './components/sidebar'
import Layout from './components/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PatientsStatistics from './pages/PatientsStatistics';
import MedicationManagement from './pages/MedicationManagement';
import ClinicalPerformance from './pages/ClinicalPerformance';
import TelemedecineStatistics from './pages/TelemedecineStatistics';
import Billing from './pages/Billing';


function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/patient",
          element:<PatientsStatistics />
        }, 
        {
          path:"/medication",
          element:<MedicationManagement />
        }, {
          path:"/performance",
          element:<ClinicalPerformance />
        }, {
          path:"/telemedcine",
          element:<TelemedecineStatistics />
        },{
          path:"/billing",
          element:<Billing />
        },

      ]
    }
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App
