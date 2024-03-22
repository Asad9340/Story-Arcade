import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Hero from '../Hero/Hero';
import Blogs from '../Blogs/Blogs';
import BlogDetails from '../BlogDetails/BlogDetails';
import Author from '../Author/Author';
import Content from '../Content/Content';

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
        children: [
          {
            path: 'content',
            element:<Content/>
          },
          {
            path: 'author',
            element: <Author />,
          },
        ],
      },
    ],
  },
]);
export default router;
