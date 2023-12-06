const Thead = () => {
      return (
        <thead className="bg-indigo-50 ">
        <tr className=" justify-between flex">
          <th
            scope="col"
            className="px-6 py-3 font-bold text-left text-xs text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 font-bold text-left text-xs text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 font-bold text-left text-xs text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 font-bold text-left text-xs text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      );
    };
    
    export default Thead;
    