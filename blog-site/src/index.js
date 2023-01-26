import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BlogsListPage from './pages/BlogsListPage';

const router = createBrowserRouter([
    // {
    //  path: "/",
    //  element: <BlogsListPage />,
    // },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);