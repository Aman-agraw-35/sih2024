import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App2 from './numberplate/App2';
import App3 from './ambulance/App3';
import App4 from './vehicledetection/App4';
import App5 from './adaptivetraffic/App5';
import App6 from './accidentdetection/App6';
import App7 from './helmetdetection/App7';

// Define routes for each component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/numberplate",
    element: <App2/>
  },
  {
    path: "/ambulance",
    element: <App3/>
  },
  {
    path: "/vehicledetection",
    element: <App4/>
  },
  {
    path: "/adaptivetraffic",
    element: <App5/>
  },
  {
    path: "/accidentdetection",
    element: <App6/>
  },
  {
    path: "/helmetdetection",
    element: <App7/>
  },
])

function App1() { 
  return (
    <div className="min-h-screen  "> 
      <RouterProvider router={router}/>
    </div>
  );
}

export default App1;

// Rendering the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1/>
  </React.StrictMode>
);
