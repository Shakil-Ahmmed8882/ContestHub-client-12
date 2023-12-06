import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto py-16 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
            <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">
              Join our community now
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Experience the benefits of our community. No obligations, just
              join and explore.
            </p>
            <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
              <img
                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt=""
              />
              <img
                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt=""
              />
              <img
                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt=""
              />
              <img
                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt=""
              />
              <span className="!ml-2 font-bold italic text-indigo-500">
                Join these awesome members
              </span>
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Link to="/community/testimonials">
                <button
                  type="button"
                  className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-primary px-6 py-4 font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                  <span className="absolute -top-5 left-0 w-full text-left text-xs italic text-white">
                    No Obligations
                  </span>
                  Join Now
                  <svg
                    style={{}}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="-mr-0.5 h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
