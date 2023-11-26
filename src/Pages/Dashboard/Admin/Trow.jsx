import React, { useState } from 'react';
import { getRole } from '../../../Utils/getRole';
import useSecureApi from '../../../Hooks/useSecureApi';
import { ToasMessage } from '../../../Utils/ToastMessage';
import { ToastError } from '../../../Utils/ToastError';

const TRow = ({setRefetch, tItem, Refetch }) => {
  
      const {_id,contestName,image,description,prizeMoney,taskSubmissionInstructions,tags,deadline,status,creatorID,winnerID,type,participants
      } = tItem



  const xiosSecure = useSecureApi()

  
  const handleUserDelete = async () => {
      

    const res = await xiosSecure.delete(`contest/?id=${_id}`)
    if(res.data.deletedCount > 0){
      ToasMessage('Deleted')
      setRefetch(!Refetch)
    }
  };


  return (
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img
            className="h-10 w-10 rounded-full"
            src={image?image:'https://i.pravatar.cc/150?img=1'}
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {contestName}
          </div>
          <div className="text-sm text-gray-500">
            {contestName}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">
        Regional Paradigm Technician
      </div>
      <div className="text-sm text-gray-500">Optimization</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap ">
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {status}
      </span>
    </td>
  
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {contestName}
    </td>
    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <button onClick={()=>handleUserDelete()} href="#" className="ml-2 text-red-600 hover:text-red-900">
        Delete
      </button>
      <button onClick={()=>handleUserDelete()} href="#" className={`ml-2 ${status == 'approved'?'text-[#605bf149]':'text-primary'} hover:text-red-900`}>
        confirm
      </button>
    </td>
  </tr>
  );
};

export default TRow;
