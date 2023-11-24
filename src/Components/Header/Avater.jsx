

const Avater = ({img}) => {
      return ( <div className="dropdown cursor-pointer dropdown-end">
      <label tabIndex={0} className="m-1">
        <div className="avatar w-[50px] online cursor-pointer">
          <div className="w-full rounded-full">
            <img src={img} />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>);
};

export default Avater;