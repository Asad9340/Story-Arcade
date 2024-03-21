import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold ">
            Welcome to StoryArcade{' '}
          </h1>
          <p className="py-6 max-w-2xl">
            StoryArcade is the bridge between the complex world of technology
            and the curious minds eager to understand it
          </p>
          <div className="flex gap-4 items-center justify-center">
            <NavLink to='/blogs'
              className="relative inline-flex items-center justify-center p-5 md:p-4 px-4 md:px-12 py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Read Blogs
              </span>
              <span className="relative invisible">Button Text</span>
            </NavLink>
            <NavLink
              to='/bookmarks'
              className="relative inline-flex items-center  px-4 md:px-8 lg:px-12 py-2 md:py-3 overflow-hidden text-base font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5 hidden md:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Button Text</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
