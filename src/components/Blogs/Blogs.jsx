import { useLoaderData } from "react-router-dom"
import Blog from "../Blog/Blog";

function Blogs() {
  const blogsData = useLoaderData();
  return (
    <div className="mt-20 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 lg:mx-12">
      {blogsData.map((blog, index) => (
        <Blog key={index} blog={blog}></Blog>
      ))}
    </div>
  );
}

export default Blogs