


const AvaterGroup = ({img}) => {
      return (  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      <div className="avatar">
        <div className="w-12">
          <img src={img} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={img} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={img} />
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral text-neutral-content">
          <span>+99</span>
        </div>
      </div>
    </div>);
};

export default AvaterGroup;