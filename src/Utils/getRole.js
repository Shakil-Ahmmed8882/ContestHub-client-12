export const getRole = () => {
      const roles = ['admin', 'content creator', 'user']; // Define your roles here
      let currentRoleIndex = 0;
    
      return () => {
        const role = roles[currentRoleIndex];
        return role;
      };
    };
    