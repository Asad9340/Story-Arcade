import { useLoaderData } from 'react-router-dom';

function BlogDetails() {
  const blog = useLoaderData();
  console.log(blog)
  return (
    <div className="mt-20  text-black border border-red-700 flex flex-col max-w-4xl p-6 mx-auto space-y-6 sm:space-y-12 rounded-lg">
      <div>
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        />
        <img
          src={blog.cover_image}
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
        />
      </div>
      <div className="p-6 space-y-2 lg:col-span-5">
        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
          {blog.title}
        </h3>
        <div className="flex justify-between gap-4 mx-4 md:mx-8">
          <p className="text-xs text-gray-500">
            {new Date(blog.created_at).toLocaleDateString()} {'  '}
            <br />
            {new Date(blog.created_at).toLocaleTimeString()}
          </p>
          <p className="text-xs text-gray-500">
            {blog.comments_count} comments {blog.positive_reactions_count} views
          </p>
        </div>
        <p>{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
