import { NavLink } from 'react-router-dom';
import coverImage from '../../assets/images/404.jpg';
import Loader from '../../Loader/Loader';
function Blog({ blog }) {
  const { title, cover_image, description, published_at, id } = blog;
  return (
    <div className="border rounded-lg p-3 hover:scale-105 duration-300">
      <NavLink
        to={`/blog/${id}`}
        className={({ isPending }) =>
          isPending ? (
            <Loader />
          ) : (
            'max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900'
          )
        }
      >
        <img
          role="presentation"
          className="object-cover rounded-lg w-full h-44 bg-gray-500"
          src={cover_image || coverImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Blog;
