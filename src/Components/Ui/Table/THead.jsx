const Thead = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Role</th>
          <th>position</th>
          <th></th>
        </tr>
      </thead>
    </table>
  );
};

export default Thead;
