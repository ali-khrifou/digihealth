import { useState } from 'react'
import Sidebar from './components/sidebar'
import Layout from './components/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PatientsStatistics from './pages/PatientsStatistics';
import MedicationManagement from './pages/MedicationManagement';
import ClinicalPerformance from './pages/ClinicalPerformance';
import TelemedecineStatistics from './pages/TelemedecineStatistics';
import Billing from './pages/Billing';
import Login from './pages/Login';


function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {
          index:true,
          // path: "/patient",
          element: <PatientsStatistics />
        },
        {
          path: "/medication",
          element: <MedicationManagement />
        }, {
          path: "/performance",
          element: <ClinicalPerformance />
        }, {
          path: "/telemedcine",
          element: <TelemedecineStatistics />
        }, {
          path: "/billing",
          element: <Billing />

        }
      ]
    }, {
      path: "/login",
      element: <Login />
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App
