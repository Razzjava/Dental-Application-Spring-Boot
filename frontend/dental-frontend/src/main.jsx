import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as bootstrap from 'bootstrap'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import AllDentists from "./components/AllDentists.jsx";
import RegisterDentalPractice from "./components/RegisterDentalPractice.jsx";
import RegisterUser from "./components/RegisterUser.jsx";
import ConfirmationScreen from "./components/ConfirmationScreen.jsx";
import DentalConfirmation from "./components/DentalConfirmation.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path:"/finddentist",
        element:<AllDentists></AllDentists>
    },
    {
        path:"/registerdentalpractice",
        element:<RegisterDentalPractice></RegisterDentalPractice>
    },
    {
        path:"/registeruser",
        element: <RegisterUser></RegisterUser>
    },
    {
        path:"/confirmation",
        element:<ConfirmationScreen></ConfirmationScreen>
    },
    {
        path:"/DentalConfirmation",
        element:<DentalConfirmation></DentalConfirmation>

    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
