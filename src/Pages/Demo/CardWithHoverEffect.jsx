import { Link } from "react-router-dom";

const CardWithHoverEffect = ({ contestItem }) => {
  const {
    
    contestName,
    image,
    description,
    prizeMoney,
    taskSubmissionInstructions,
    tags,
    deadline,
    status,
    creatorID,
    winnerID,
    type,
    participants,
  } = contestItem || {};
  return (
    <div>
      <>
        <div className="relative flex  overflow-hidden bg-gray-50 ">
          <div className="group relative cursor-pointer overflow-hidden bg-white   pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg ">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
            <div className="relative z-10 mx-auto max-w-md">
              <div className="space-y-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <div className="">
                  <img className="w-full h-full object-cover" src={image} />
                  <h2>{contestName}</h2>
                  <p>
                    <span>icon</span>Attempted:{participants?.length}
                  </p>
                  <p>{description}</p>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300">
                        <Link className="btn" >
                          Details Read the docs →
                        </Link>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* https://play.tailwindcss.com/eCfibrSI2X */}
      </>
    </div>
  );
};

export default CardWithHoverEffect;
