import { useLoaderData, NavLink, Outlet } from 'react-router-dom';
import { MdContentPaste } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

function BlogDetails() {
  const blog = useLoaderData();
  const {
    title,
    description,
    created_at,
    comments_count,
    positive_reactions_count,
    cover_image,
    tags,
  } = blog;
  console.log(blog);
  return (
    <div className="mt-20  text-black border border-red-700 flex flex-col max-w-4xl p-6 mx-auto space-y-6 sm:space-y-12 rounded-lg">
      <div className="p-6 space-y-2 lg:col-span-5">
        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div className="flex justify-between gap-4 mx-4 md:mx-8">
          <p className="text-xs text-gray-500">
            {new Date(created_at).toLocaleDateString()} {'  '}
            <br />
            {new Date(created_at).toLocaleTimeString()}
          </p>
          <p className="text-xs text-gray-500">
            {comments_count} comments {positive_reactions_count} views
          </p>
        </div>
        <hr />
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-800 text-gray-100 rounded-lg">
        <NavLink
          to=""
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400"
        >
          <MdContentPaste />
          <span>Content</span>
        </NavLink>
        <NavLink
          to="author"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400 text-gray-50"
        >
          <CgProfile />
          <span>Author</span>
        </NavLink>
      </div>
      <Outlet />
      <div>
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        />
        <img
          src={cover_image}
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
        />
      </div>
      <div className="p-6 space-y-2 lg:col-span-5">
        <h3 className="text-xl font-semibold sm:text-2xl group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div className="flex justify-between gap-4 mx-4 md:mx-8">
          <p className="text-xs text-gray-500">
            {new Date(created_at).toLocaleDateString()} {'  '}
            <br />
            {new Date(created_at).toLocaleTimeString()}
          </p>
          <p className="text-xs text-gray-500">
            {comments_count} comments {positive_reactions_count} views
          </p>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex gap4 justify-around">
        {tags.map((tag, index) => (
          <a key={index} className="hover:underline">
            #{tag}
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
