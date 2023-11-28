import { Rating } from "@mui/material";

const InfoCard = ({
  crown,
  name,
  contesName,
  description,
  photoURL,
  rating,
}) => {
  return (
    <div>
      <section className="flex  flex-col justify-center  antialiased bg-gray-50 text-gray-600  ">
        <div className="h-full mx-3 md:mx-0">
          {/* Card */}
          <div className="w-full mx-auto bg-[#615BF1] shadow-lg rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-start">
                <label tabIndex={0} className="m-1">
                  <div className="avatar w-[44px] online cursor-pointer">
                    <div className="w-full rounded-full">
                      <img src={photoURL} />
                    </div>
                  </div>
                </label>
                {/* Card content */}
                <div className="flex-grow truncate">
                  {/* Card header */}
                  <div className="w-full sm:flex justify-between items-center mb-3">
                    {/* Title */}
                    <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                      {name}
                    </h2>
                    {/* Like and comment buttons */}
                    <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                      <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                        <Rating color="white" value={rating}></Rating>
                      </button>
                      <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                          viewBox="0 0 16 16">
                          <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                        </svg>
                        <span>
                          64 <span className="sr-only">comments</span>
                        </span>
                      </button>
                      <div className=" flex items-center justify-center rounded-full  absolute -top-4 left-2 w-16 h-16 ">
                        {/* <img className="" src={crown} alt="crown" /> */}
                      </div>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="flex items-end justify-between whitespace-normal">
                    {/* Paragraph */}
                    <div className="max-w-md text-indigo-100 text-xl font-normal">
                      <p className="mb-2">{description}</p>
                    </div>
                    {/* More link */}
                    <a className="" href="#0">
                      <img
                        className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150  mr-8"
                        src="https://e7.pngegg.com/pngimages/972/904/png-clipart-trophy-a-trophy-painted-simple-thumbnail.png"
                        alt=""
                      />
                      {/* <span className="block font-bold">
                        <span className="sr-only">Read more</span> -&gt;
                      </span> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoCard;
