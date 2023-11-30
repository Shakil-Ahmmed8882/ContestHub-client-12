import React, { useState } from 'react';
import { getRole } from '../../../Utils/getRole';
import useSecureApi from '../../../Hooks/useSecureApi';
import { ToasMessage } from '../../../Utils/ToastMessage';
import { ToastError } from '../../../Utils/ToastError';

const TRow = ({setRefetch, tItem, Refetch }) => {
  const {_id,name,email,role,photoURL
  } = tItem || {};


  
  
  const roles = ['user', 'contest_creator', 'admin'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const getRoleByIndex = (index) => roles[index];
  const xiosSecure = useSecureApi()

  const handleToggleRole = async() => {
    const nextIndex = (currentRoleIndex + 1) % roles.length;
    setCurrentRoleIndex(nextIndex);

    // get the role to be applied
    const toggledRole = getRoleByIndex(nextIndex);
    const res = await xiosSecure.patch('role',{role:toggledRole,userId:_id})
    if(res.data.modifiedCount > 0){
      ToasMessage(`${name?name:'role'} is ${name?toggledRole:'changed'} now`)
      setRefetch(!Refetch)
    }
  };

  const handleUserDelete = async () => {

    const res = await xiosSecure.delete(`/user?id=${_id}`)
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
            src={photoURL?photoURL:'https://i.pravatar.cc/150?img=1'}
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {name}
          </div>
          <div className="text-sm text-gray-500">
            {email}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap ">
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
      </span>
    </td>
    <td onClick={handleToggleRole} className="px-6 py-4 cursor-pointer text-accent whitespace-nowrap">
        {/* Display the current role based on the currentRoleIndex */}
        <span className='opacity-0 fixed'>
        {getRoleByIndex(currentRoleIndex)}
        </span>
        <span>{role}</span>
      </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {email}
    </td>
    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <button onClick={()=>handleUserDelete()} href="#" className="ml-2 text-red-600 hover:text-red-900">
        Delete
      </button>
    </td>
  </tr>
  );
};

export default TRow;
