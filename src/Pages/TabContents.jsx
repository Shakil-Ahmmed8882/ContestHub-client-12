import React from 'react';
import { Link } from 'react-router-dom';

const TabContents = ({ contestItem }) => {
  const {
    _id,
    contestName,
    image,
    description,
    prizeMoney,
    taskSubmissionInstructions,
    tags,
    deadline,
    status,
    winnerID,
    type,
    creatorID,
    participants,
  } = contestItem;

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
      <div className="antialiased min-w-[300px] text-gray-900 relative">
        <div className="shadow-lg rounded-lg">
          <div className="relative">
            <img
              className="h-48 w-full object-cover rounded-t-lg"
              src={image || 'https://via.placeholder.com/600x400'}
              alt={contestName || 'Contest Image'}
            />
            <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply rounded-t-lg" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold rounded-t-lg">
              <p className="text-center bg-white text-black p-3">{contestName || 'All'}</p>
            </div>
          </div>
          <div className="p-6">
            {/* Rest of the content */}
            <div className="flex items-baseline">
              {/* ... */}
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
              {contestName || 'Beautiful Home in the countryside'}
            </h4>
            {/* ... */}
              {participants.length || 'Beautiful Home in the countryside'}
            
            <Link to={`/contest/${_id}`}>view</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContents;