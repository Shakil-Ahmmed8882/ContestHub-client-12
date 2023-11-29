import { useEffect, useState } from "react";
import usePublicApi from "../Hooks/usePublicApi";
import { Link } from "react-router-dom";
import TitleDescription from "../Components/Ui/TitleDescription ";

const Popular = () => {
  const xiosPublic = usePublicApi();
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    xiosPublic
      .get("topParticipatedContests")
      .then((res) => setPopularData(res.data));
  }, [xiosPublic]);
  // console.log(popularData)

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="py-12  bg-white overflow-hidde relative z-10">
        <div className="max-w-[1050px]  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <TitleDescription
              top_SmallText={"ContestHub"}
              title={"Top 4 popular contests"}
              description={
                "Explore the most contests that captivated numerous participants! Delve into a world of creativity and competition."
              }></TitleDescription>
          </div>
          <div className="grid md:grid-cols-2 gap-11">
            {popularData?.slice(0, 4).map((contest, idx) => {
              return (
                <div key={idx} className="min-h-[55vh] mb-8">
                  <dl
                    className="hero "
                    style={{
                      backgroundImage:
                        "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                    }}>
                    <div className="relative -bottom-[100px] mx-2 bg-[#ededffe2] p-3 rounded-lg">
                      <dt className="relative">
                        <div className=" ml-1 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                          {/* Heroicon name: outline/globe-alt */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <div className="ml-1 mt-3">
                          <p className=" text-lg leading-6 font-medium text-gray-900">
                            {contest?.contestName}
                          </p>
                          <p className="mt-1 mb-3">
                            Attemptants:{" "}
                            <span className="px-1  bg-green-400  text-white rounded-full font-bold">
                              {contest.participantsCount}
                            </span>{" "}
                          </p>
                          <p></p>
                          <p></p>
                          <p></p>
                        </div>
                      </dt>
                      <dd className="mt-2 ml-1 text-base text-gray-500 mb-8">
                        {contest.description}
                      </dd>
                      <div className="text-right px-3 mt-3">
                        <Link
                          to={`/contest/${contest._id}`}
                          className="bg-[#4f49ff] hover:bg-[#625df7] btn w-1/2 text-white ">
                          Details
                        </Link>
                      </div>
                    </div>
                  </dl>
                </div>
              );
            })}

         
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
