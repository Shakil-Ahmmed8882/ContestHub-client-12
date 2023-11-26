import React, { useState } from 'react';

const RoleToggler = () => {
  const roles = ['admin', 'content creator']; // Define your roles here
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const handleToggleRole = () => {
    const nextIndex = (currentRoleIndex + 1) % roles.length;
    setCurrentRoleIndex(nextIndex);
  };

  return (
    <div>
      <h2>Current Role: {roles[currentRoleIndex]}</h2>
      <button onClick={handleToggleRole}>Toggle Role</button>
    </div>
  );
};

export default RoleToggler;
