
function Blog({ blog }) {
  const { title, cover_image, description } = blog;
  console.log(blog);
  return (
    <div className="border rounded-lg p-3 hover:scale-105 duration-300">
      <a
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover rounded-lg w-full h-44 bg-gray-500"
          src={cover_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">January 21, 2021</span>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Blog