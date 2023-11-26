import React, { useState } from 'react';
import { getRole } from '../../../Utils/getRole';
import useSecureApi from '../../../Hooks/useSecureApi';

const TRow = ({ tItem }) => {
  const {_id,password,role,participationDetails
  } = tItem || {};




  
  const roles = ['user', 'contest_creator', 'admin'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const getRoleByIndex = (index) => roles[index];
  const xiosSecure = useSecureApi()

  const handleToggleRole = async() => {
    const nextIndex = (currentRoleIndex + 1) % roles.length;
    setCurrentRoleIndex(nextIndex);

    const toggledRole = getRoleByIndex(nextIndex);
    const res = await xiosSecure.patch('role',{role:toggledRole,userId:_id})
    if(res){
      console.log('role changed')
    }

    // Additional logic if needed based on the toggled role
    // For example, you can perform actions based on the role here
    // handleUserActions(toggledRole);
  };

  const handleUserDelete = () => {
    console.log(_id);
  };

  const handleEditUser = () => {
    console.log(_id);
  };

  return (
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pravatar.cc/150?img=1"
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            Jane Cooper
          </div>
          <div className="text-sm text-gray-500">
            jane.cooper@example.com
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
        Active
      </span>
    </td>
    <td onClick={handleToggleRole} className="px-6 py-4 cursor-pointer text-accent whitespace-nowrap">
        {/* Display the current role based on the currentRoleIndex */}
        {getRoleByIndex(currentRoleIndex)}
      </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      jane.cooper@example.com
    </td>
    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
      <buttton onClick={()=>handleEditUser()} href="#" className="text-indigo-600 hover:text-indigo-900">
        Edit
      </buttton >
      <button onClick={()=>handleUserDelete()} href="#" className="ml-2 text-red-600 hover:text-red-900">
        Delete
      </button>
    </td>
  </tr>
  );
};

export default TRow;
