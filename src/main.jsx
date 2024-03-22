import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/BlogDetails/BlogDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Hero />,
      },
      {
        path: '/hero',
        element: <Hero />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=20'),
      },
      {
        path: '/blog/:blogId',
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.blogId}`),
        element: <BlogDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
